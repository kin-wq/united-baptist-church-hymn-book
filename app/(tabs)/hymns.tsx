import { useLocalSearchParams, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { CategoryPill, HymnRow, SearchField, palette } from "@/components/hymn-ui";
import { categories, searchHymns } from "@/data/hymns";
import { useHymnStore } from "@/lib/hymn-store";
import { useMemo, useState } from "react";

export default function HymnsScreen() {
  const params = useLocalSearchParams<{ q?: string; categoryId?: string }>();
  const [query, setQuery] = useState(params.q ?? "");
  const [categoryId, setCategoryId] = useState<number | null>(params.categoryId ? Number(params.categoryId) : null);
  const { favorites, toggleFavorite } = useHymnStore();
  const results = useMemo(() => searchHymns(query, categoryId), [query, categoryId]);
  const selectedCategory = categories.find((category) => category.id === categoryId);
  return <ScreenContainer containerClassName="bg-[#E9F2F7]" className="px-5"><ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
    <Text style={{ color: palette.navy, fontSize: 28, fontWeight: "800", marginTop: 12 }}>{selectedCategory?.name ?? "Hymn library"}</Text>
    <Text style={{ color: palette.muted, marginTop: 5, marginBottom: 18 }}>{selectedCategory ? "All hymns in this collection" : "398 songs in the full collection"} · browse offline</Text>
    <View style={{ marginBottom: 18, paddingBottom: 5, borderRadius: 22, backgroundColor: "#E9F2F7", shadowColor: "#0B2E59", shadowOpacity: 0.16, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 5 }}><SearchField value={query} onChangeText={setQuery} placeholder="Search by hymn number or words..." /></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 14, marginBottom: 20 }}><CategoryPill label="All hymns" active={!categoryId} onPress={() => setCategoryId(null)} />{categories.map((category) => <CategoryPill key={category.id} label={category.short} active={category.id === categoryId} onPress={() => setCategoryId(category.id)} />)}</ScrollView>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><Text style={{ color: palette.ink, fontWeight: "800", fontSize: 16 }}>{results.length} results</Text><Text style={{ color: palette.muted, fontSize: 12 }}>Sorted by number</Text></View>
    {results.length ? results.map((hymn) => <HymnRow key={hymn.id} hymn={hymn} favorite={favorites.includes(hymn.id)} onToggleFavorite={() => toggleFavorite(hymn.id)} onPress={() => router.push({ pathname: "/hymn/[id]", params: { id: String(hymn.id) } })} />) : <View style={{ alignItems: "center", paddingTop: 60 }}><Text style={{ color: palette.navy, fontWeight: "800", fontSize: 18 }}>No hymns found</Text><Text style={{ color: palette.muted, marginTop: 8 }}>Try a title, number, category or lyric word.</Text></View>}
  </ScrollView></ScreenContainer>;
}
