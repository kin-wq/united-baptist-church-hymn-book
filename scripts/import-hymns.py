#!/usr/bin/env python3
import json
import re
from pathlib import Path

SOURCE = Path(__file__).resolve().parents[1] / "docs" / "references" / "extracted-hymns.txt"
TARGET = Path(__file__).resolve().parents[1] / "data" / "hymns.ts"

category_re = re.compile(r"^(Nduyo Dzokudira|Nziyo Dzevhangeri) \((\d+) hymns\)$")
hymn_re = re.compile(r"^(\d+)\.\s+(.*)$")
section_re = re.compile(r"^(Stanza\s+\d+|KHORASI)$", re.IGNORECASE)

raw_lines = SOURCE.read_text(encoding="utf-8").replace("\f", "\n").splitlines()
category_id = None
category_name = None
current = None
current_section = None
hymns = []


def flush_section():
    global current_section
    if current is None or current_section is None:
        return
    content_lines = [line.rstrip() for line in current_section["lines"]]
    while content_lines and not content_lines[0].strip():
        content_lines.pop(0)
    while content_lines and not content_lines[-1].strip():
        content_lines.pop()
    if content_lines:
        current["stanzas"].append({
            "id": len(current["stanzas"]) + 1,
            "title": current_section["title"],
            "content": "\n".join(content_lines),
        })
    current_section = None


def flush_hymn():
    global current
    flush_section()
    if current is not None:
        if not current["stanzas"] and current.get("unsectioned"):
            content = "\n".join(line.rstrip() for line in current["unsectioned"] if line.strip()).strip()
            if content:
                current["stanzas"].append({"id": 1, "title": "Content note", "content": content})
        if not current["stanzas"]:
            raise ValueError(f"Hymn {current['number']} has no stanza content")
        hymns.append(current)
    current = None

for raw in raw_lines:
    line = raw.rstrip("\r")
    category_match = category_re.match(line.strip())
    if category_match:
        flush_hymn()
        category_name = category_match.group(1)
        category_id = 1 if category_name == "Nduyo Dzokudira" else 2
        continue

    hymn_match = hymn_re.match(line.strip())
    if hymn_match and category_id is not None:
        flush_hymn()
        current = {
            "id": int(hymn_match.group(1)),
            "number": int(hymn_match.group(1)),
            "categoryId": category_id,
            "category": category_name,
            "title": hymn_match.group(2).strip(),
            "stanzas": [],
            "unsectioned": [],
        }
        continue

    section_match = section_re.match(line.strip())
    if section_match and current is not None:
        flush_section()
        title = section_match.group(1)
        current_section = {
            "title": "Khorasi" if title.upper() == "KHORASI" else title,
            "lines": [],
        }
        continue

    if current_section is not None:
        current_section["lines"].append(line)
    elif current is not None:
        current["unsectioned"].append(line)

flush_hymn()

expected = 398
if len(hymns) != expected:
    raise ValueError(f"Expected {expected} hymns, parsed {len(hymns)}")
if sum(h["categoryId"] == 1 for h in hymns) != 262:
    raise ValueError("Expected 262 Nduyo Dzokudira hymns")
if sum(h["categoryId"] == 2 for h in hymns) != 136:
    raise ValueError("Expected 136 Nziyo Dzevhangeri hymns")

for index, hymn in enumerate(hymns, start=1):
    hymn.pop("unsectioned", None)
    hymn["id"] = index
    for stanza_index, stanza in enumerate(hymn["stanzas"], start=1):
        stanza["id"] = hymn["id"] * 100 + stanza_index

categories = [
    {"id": 1, "name": "Nduyo Dzokudira", "short": "Worship", "icon": "music-note"},
    {"id": 2, "name": "Nziyo Dzevhangeri", "short": "Gospel", "icon": "auto-awesome"},
]

json_data = json.dumps(hymns, ensure_ascii=False, indent=2)
category_data = json.dumps(categories, ensure_ascii=False, indent=2)
output = f'''export type Stanza = {{ id: number; title: string; content: string }};
export type Hymn = {{ id: number; number: number; categoryId: number; category: string; title: string; stanzas: Stanza[] }};

export const categories = {category_data};

export const hymns: Hymn[] = {json_data};

export const formatNumber = (number: number) => String(number).padStart(3, "0");

export function searchHymns(query: string, categoryId?: number | null) {{
  const normalized = query.trim().toLowerCase();
  return hymns.filter((hymn) => {{
    const categoryMatch = !categoryId || hymn.categoryId === categoryId;
    const haystack = [hymn.title, hymn.category, String(hymn.number), formatNumber(hymn.number), ...hymn.stanzas.flatMap((stanza) => [stanza.title, stanza.content])].join(" ").toLowerCase();
    return categoryMatch && (!normalized || haystack.includes(normalized));
  }});
}}

export function getHymn(id: number) {{
  return hymns.find((hymn) => hymn.id === id) ?? hymns[0];
}}

export function getHymnText(hymn: Hymn) {{
  return hymn.stanzas.map((stanza) => `${{stanza.title}}\\n${{stanza.content}}`).join("\\n\\n");
}}
'''
TARGET.write_text(output, encoding="utf-8")
print(f"Imported {{len(hymns)}} hymns: 262 Nduyo Dzokudira + 136 Nziyo Dzevhangeri")
print(f"Wrote {{TARGET}}")
