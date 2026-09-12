# United Baptist Church Hymn Book

A mobile-first hymn-book application for United Baptist Church, built with Expo, React Native, TypeScript, Expo Router, NativeWind, and local persistence.

The app combines the familiarity of a traditional hymn book with a calm, premium mobile interface. The supplied church hymn-book logo is used as the core visual identity.

## Current status

The current implementation is a tested mobile prototype and working foundation. It includes the branded category-first entry screen, hymn collection browsing, local search, favorites, a readable hymn reader, persistent reading preferences, sharing/copying, glassmorphism styling, and automated data/search tests.

The content layer currently contains a representative editable hymn dataset. The next content milestone is importing the complete existing collection described in the project brief: approximately 398 songs and 1,731 stanza/content records from the original `music.db` source.

## Design direction

The visual direction is **traditional hymn book plus modern premium mobile app**. The app intentionally uses the supplied UI reference only for layout quality, spacing, rounded cards, layered surfaces, visual hierarchy, and mobile polish. It does not copy the reference application's plant or e-commerce content.

The current design uses restrained glassmorphism: translucent white surfaces, soft borders, subtle shadows, rounded cards, and a pale blue-green paper background. Readability remains the priority, especially inside the hymn reader.

### Brand identity

- App name: **United Baptist Church Hymn Book**
- Visible header brand: **United Baptist Church**
- Header subtitle: **Hymn Book**
- Tagline: **Songs of faith • words of worship**
- Logo: `assets/images/hymn-logo.png`
- App icon and splash artwork use the same supplied logo asset.

### Color system

- Deep church blue / teal: `#173C4A`
- Secondary blue-teal: `#234F59`
- Primary dark red: `#7A1118`
- Soft paper background: `#E5F0F0`
- Ink: `#17313D`
- Muted text: `#607980`
- Limited gold accent: `#B89B48`
- Translucent white glass surfaces: `rgba(255,255,255,0.56–0.62)`

## User flow

1. The opening screen presents the enlarged church logo in the top-left and the **United Baptist Church** name.
2. The user chooses one of the two primary hymn collections:
   - `Nduyo Dzokudira`
   - `Nziyo Dzevhangeri`
3. The selected collection opens as a full hymn list.
4. A floating/sticky glass search field stays available while browsing and searches by hymn number, title, category, or lyric words.
5. Selecting a hymn opens a distraction-free reader with formatted stanzas, font-size controls, favorite, share, and copy actions.
6. Bottom navigation contains only **Home**, **Hymns**, and **Favorites**. The redundant Categories tab is intentionally hidden.

## Main features

- Category-first opening experience
- Category-filtered hymn collection browsing
- Local/offline search across hymn number, title, category, and stanza content
- Zero-padded hymn number search, such as `002`
- Favorite/unfavorite hymns with AsyncStorage persistence
- Persistent reader font-size preference
- Readable stanza presentation preserving line breaks
- Share hymn text through the native share sheet
- Copy lyrics to the clipboard
- Keep-awake behavior while reading
- Glassmorphism cards, search field, controls, and surfaces
- Responsive Expo web preview and native mobile foundation
- Branded app icon and splash artwork

## Project structure

```text
app/
  _layout.tsx                 Root providers and navigation stack
  (tabs)/
    _layout.tsx               Home / Hymns / Favorites tab bar
    index.tsx                 Category-first opening screen
    hymns.tsx                 Filtered hymn collection and sticky search
    favorites.tsx             Saved hymn collection
    categories.tsx            Legacy route retained but hidden from tabs
  hymn/[id].tsx               Hymn reading screen
components/
  hymn-ui.tsx                 Palette and reusable hymn UI primitives
  screen-container.tsx        Safe-area screen wrapper
 data/
  hymns.ts                    Editable hymn/category data model and search
 lib/
  hymn-store.tsx              AsyncStorage-backed favorites and reader settings
assets/images/
  hymn-logo.png               Supplied church hymn-book logo
  icon.png                    Branded app icon
  splash-icon.png             Branded splash artwork
 tests/
  hymns.test.ts               Data model and search tests
```

## Data model

The editable data model is defined in `data/hymns.ts`:

```ts
export type Hymn = {
  id: number;
  number: number;
  categoryId: number;
  category: string;
  title: string;
  stanzas: Stanza[];
};
```

Each stanza stores an ID, display title, and original line-preserving content. The search index covers the title, category, numeric ID and zero-padded number, plus all stanza text.

When the complete source database is available, preserve the original categories, song records, and stanza formatting. The target source structure described in the briefs is:

- `category(id, name)`
- `songs(id, categoryId, title, isFavourite, number)`
- `facts(id, songId, title, content)`
- `settings(id, fontSize, isDarkMode)`

## Development

Install dependencies:

```bash
pnpm install
```

Run the Expo web preview:

```bash
pnpm dev
```

Run automated tests:

```bash
pnpm test
```

Run the TypeScript check:

```bash
pnpm check
```

## Verification status

The current checkpoint was verified with:

- `pnpm test` — 3 tests passed; the scaffold's unrelated auth test remains skipped.
- `pnpm check` — TypeScript completed with zero errors.
- Mobile preview screenshots for the category-first screen, selected collections, search, favorites, and reader.
- Browser interaction testing for category selection, lyric-word search, and opening a hymn reader.

## Next development milestones

1. Import and verify the complete 398-song and 1,731-stanza dataset.
2. Add dark mode and a settings screen.
3. Add previous/next hymn navigation and recently viewed hymns.
4. Add search-result highlighting and sort controls.
5. Replace representative sample records with the preserved original database content without changing Shona wording or line breaks.

## License and content note

This repository contains the application source and the supplied church logo asset. Hymn content should be treated as church-owned or otherwise appropriately licensed material and preserved according to the project's source and distribution requirements.
