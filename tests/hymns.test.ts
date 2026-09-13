import { describe, expect, it } from "vitest";
import { getHymn, getHymnText, hymns, searchHymns } from "../data/hymns";

describe("hymn data model", () => {
  it("contains the prototype hymn records with stanza content", () => {
    expect(hymns).toHaveLength(398);
    expect(hymns.filter((hymn) => hymn.categoryId === 1)).toHaveLength(262);
    expect(hymns.filter((hymn) => hymn.categoryId === 2)).toHaveLength(136);
    expect(hymns.every((hymn) => hymn.stanzas.length > 0)).toBe(true);
    expect(getHymn(2).title).toBe("Tinokudza Mwari");
    expect(getHymnText(getHymn(2))).toContain("Tinokudza Mwari");
  });

  it("searches titles, categories, numbers, and stanza lyrics", () => {
    expect(searchHymns("Mwari").length).toBeGreaterThan(10);
    expect(searchHymns("002").map((hymn) => hymn.number)).toEqual([2, 2]);
    expect(searchHymns("Gospel").every((hymn) => hymn.categoryId === 2)).toBe(true);
    expect(searchHymns("KHORASI").length).toBeGreaterThan(10);
  });

  it("filters by category without losing the query filter", () => {
    expect(searchHymns("", 1).every((hymn) => hymn.categoryId === 1)).toBe(true);
    expect(searchHymns("Jesu", 2).length).toBeGreaterThan(0);
    expect(searchHymns("Jesu", 1).length).toBeGreaterThan(0);
  });
});
