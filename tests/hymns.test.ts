import { describe, expect, it } from "vitest";
import { getHymn, getHymnText, hymns, searchHymns } from "../data/hymns";

describe("hymn data model", () => {
  it("contains the prototype hymn records with stanza content", () => {
    expect(hymns.length).toBeGreaterThanOrEqual(6);
    expect(hymns.every((hymn) => hymn.stanzas.length > 0)).toBe(true);
    expect(getHymn(2).title).toBe("Tinokudza Mwari");
    expect(getHymnText(getHymn(2))).toContain("Tinokudza Mwari");
  });

  it("searches titles, categories, numbers, and stanza lyrics", () => {
    expect(searchHymns("Mwari").map((hymn) => hymn.id)).toEqual(expect.arrayContaining([2, 3]));
    expect(searchHymns("002").map((hymn) => hymn.id)).toEqual([2]);
    expect(searchHymns("Gospel").every((hymn) => hymn.categoryId === 2)).toBe(true);
    expect(searchHymns("Halleluya").map((hymn) => hymn.id)).toEqual([2]);
  });

  it("filters by category without losing the query filter", () => {
    expect(searchHymns("", 1).every((hymn) => hymn.categoryId === 1)).toBe(true);
    expect(searchHymns("Jesu", 2)).toHaveLength(1);
    expect(searchHymns("Jesu", 1)).toHaveLength(0);
  });
});
