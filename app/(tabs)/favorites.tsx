import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScreenContainer } from "@/components/screen-container";
import { HymnRow, palette } from "@/components/hymn-ui";
import { hymns } from "@/data/hymns";
import { useHymnStore } from "@/lib/hymn-store";

export default function FavoritesScreen() {
  const { favorites, toggleFavorite } = useHymnStore();
  const saved = hymns.filter((hymn) => favorites.includes(hymn.id));
  return <ScreenContainer containerClassName="bg-[#E9F2F7]" className="px-5"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
    <Text style={{ color: palette.navy, fontSize: 28, fontWeight: "800", marginTop: 12 }}>My favorites</Text><Text style={{ color: palette.muted, marginTop: 5, marginBottom: 22 }}>Keep the hymns you return to close at hand.</Text>
    {saved.length ? saved.map((hymn) => <HymnRow key={hymn.id} hymn={hymn} favorite onToggleFavorite={() => toggleFavorite(hymn.id)} onPress={() => router.push({ pathname: "/hymn/[id]", params: { id: String(hymn.id) } })} />) : <View style={{ alignItems: "center", paddingHorizontal: 25, paddingTop: 65 }}><View style={{ width: 74, height: 74, borderRadius: 27, backgroundColor: "#F3E5E7", alignItems: "center", justifyContent: "center" }}><MaterialIcons name="favorite-border" size={36} color={palette.red} /></View><Text style={{ color: palette.navy, fontWeight: "800", fontSize: 19, marginTop: 18 }}>Your favorites will live here</Text><Text style={{ color: palette.muted, textAlign: "center", lineHeight: 20, marginTop: 8 }}>Tap the heart on any hymn to build a personal collection for worship.</Text></View>}
  </ScrollView></ScreenContainer>;
}
