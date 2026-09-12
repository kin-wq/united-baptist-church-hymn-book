export type Stanza = { id: number; title: string; content: string };
export type Hymn = { id: number; number: number; categoryId: number; category: string; title: string; stanzas: Stanza[] };

export const categories = [
  { id: 1, name: "Nduyo Dzokudira", short: "Worship", icon: "music-note" },
  { id: 2, name: "Nziyo Dzevhangeri", short: "Gospel", icon: "auto-awesome" },
  { id: 3, name: "Praise", short: "Praise", icon: "favorite" },
  { id: 4, name: "Communion", short: "Communion", icon: "local-dining" },
];

export const hymns: Hymn[] = [
  {
    id: 1, number: 1, categoryId: 1, category: "Nduyo Dzokudira", title: "Mucheni! Mucheni! Mucheni!",
    stanzas: [
      { id: 1, title: "Stanza 1", content: "Mucheni! Mucheni! Mucheni!\nMambo auya kwatiri.\nNgatimutenderei\nNerumbidzo dzedu." },
      { id: 2, title: "Stanza 2", content: "Mwoyo yedu ngairumbidze\nZita rake dzvene;\nRudo rwake haruperi,\nNyasha dzake dzinogara." },
    ],
  },
  {
    id: 2, number: 2, categoryId: 2, category: "Nziyo Dzevhangeri", title: "Tinokudza Mwari",
    stanzas: [
      { id: 3, title: "Stanza 1", content: "Tinokudza Mwari,\nUri baba wedu.\nWakatuma kwetiri\nMuponesi wedu." },
      { id: 4, title: "Khorasi", content: "Halleluya, halleluya,\nNgatirumbidze zita rake;\nHalleluya, halleluya,\nRudo rwake haruperi." },
    ],
  },
  {
    id: 3, number: 3, categoryId: 1, category: "Nduyo Dzokudira", title: "Mwari Ndinouya",
    stanzas: [
      { id: 5, title: "Stanza 1", content: "Mwari ndinouya kwamuri,\nNemwoyo wangu wose.\nNditungamirirei,\nMundisimbise nhasi." },
      { id: 6, title: "Stanza 2", content: "Kana nzira yakaoma,\nNyasha dzenyu dzinondibata.\nNdichafamba mukutenda,\nNokusvika pamba pedu." },
    ],
  },
  {
    id: 4, number: 4, categoryId: 3, category: "Praise", title: "Jesu Ndiye Mambo",
    stanzas: [
      { id: 7, title: "Stanza 1", content: "Jesu ndiye Mambo,\nMufaro wevose.\nTinomukudza nokusingaperi,\nZita rake rinoyera." },
      { id: 8, title: "Khorasi", content: "Rumbidzai, rumbidzai,\nMambo wedu Jesu;\nRumbidzai, rumbidzai,\nAnokunda nokusingaperi." },
    ],
  },
  {
    id: 5, number: 5, categoryId: 4, category: "Communion", title: "Tafura Yenyasha",
    stanzas: [
      { id: 9, title: "Stanza 1", content: "Patafura yenyasha,\nTinosangana murudo.\nChingwa newaini zvinotiyeuchidza\nRudo rwaKristu kwatiri." },
      { id: 10, title: "Stanza 2", content: "Tive muviri mumwe,\nTive moyo mumwewo.\nRugare rwake ngaruve nesu,\nNhasi nokusingaperi." },
    ],
  },
  {
    id: 6, number: 6, categoryId: 2, category: "Nziyo Dzevhangeri", title: "Jesu Ndipei Simba",
    stanzas: [
      { id: 11, title: "Stanza 1", content: "Jesu ndipai simba,\nKuti ndifambe nemi.\nPakati pemiedzo,\nMuchengetei mwoyo wangu." },
      { id: 12, title: "Stanza 2", content: "Shoko renyu chiedza,\nRinotungamirira nzira.\nNdicharamba ndichivimba,\nNokuti muri pedyo." },
    ],
  },
];

export const formatNumber = (number: number) => String(number).padStart(3, "0");

export function searchHymns(query: string, categoryId?: number | null) {
  const normalized = query.trim().toLowerCase();
  return hymns.filter((hymn) => {
    const categoryMatch = !categoryId || hymn.categoryId === categoryId;
    const haystack = [hymn.title, hymn.category, String(hymn.number), formatNumber(hymn.number), ...hymn.stanzas.map((stanza) => stanza.content)].join(" ").toLowerCase();
    return categoryMatch && (!normalized || haystack.includes(normalized));
  });
}

export function getHymn(id: number) {
  return hymns.find((hymn) => hymn.id === id) ?? hymns[0];
}

export function getHymnText(hymn: Hymn) {
  return hymn.stanzas.map((stanza) => `${stanza.title}\n${stanza.content}`).join("\n\n");
}
