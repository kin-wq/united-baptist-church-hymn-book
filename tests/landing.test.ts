import { readFileSync } from "node:fs";
import { URL } from "node:url";
import { describe, expect, it } from "vitest";

const html = readFileSync(new URL("../landing/index.html", import.meta.url), "utf8");

describe("public APK landing page", () => {
  it("uses only anonymously accessible distribution-repository links", () => {
    const links = [...html.matchAll(/(?:href|src)="(https:[^"]+)"/g)].map((match) => new URL(match[1]));
    expect(links).toHaveLength(3);
    for (const link of links) {
      expect(link.pathname).toMatch(/^\/kin-wq\/united-baptist-church-hymn-book-download\//);
    }
  });
  it("has two public logo images with accessible labels", () => {
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    expect(images).toHaveLength(2);
    for (const image of images) {
      expect(image).toContain("hymn-book-download/main/logo.png");
      expect(image).toMatch(/alt="[^"]+"/);
    }
  });
  it("links the v1.0.1 APK from an explicit download button", () => {
    expect(html).toMatch(/href="https:\/\/github.com\/kin-wq\/united-baptist-church-hymn-book-download\/releases\/download\/v1\.0\.1\/[^"\s]+\.apk" download/);
    expect(html).toContain('name="viewport"');
  });
});
