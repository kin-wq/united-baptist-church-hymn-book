import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "@/components/screen-container";
import { CategoryPill, HymnRow, SearchField, SectionHeading, palette } from "@/components/hymn-ui";
import { categories, hymns } from "@/data/hymns";
import { useHymnStore } from "@/lib/hymn-store";

export default function HomeScreen() {
  const { favorites, toggleFavorite } = useHymnStore();
  return <ScreenContainer containerClassName="bg-[#F8FAFC]" className="px-5">
    <StatusBar style="dark" />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 34 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10, marginBottom: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}><Image source={require("@/assets/images/hymn-logo.png")} style={{ width: 42, height: 42, borderRadius: 12 }} contentFit="contain" /><View style={{ marginLeft: 10 }}><Text style={{ color: palette.navy, fontSize: 19, fontWeight: "800" }}>Hymn Book</Text><Text style={{ color: palette.muted, fontSize: 11, marginTop: 1 }}>Songs of faith • words of worship</Text></View></View>
        <Pressable onPress={() => router.push("/favorites")} hitSlop={10}><MaterialIcons name="favorite-border" size={25} color={palette.red} /></Pressable>
      </View>
      <SearchField value="" onChangeText={(value) => value && router.push({ pathname: "/hymns", params: { q: value } })} />
      <View style={{ marginTop: 18, backgroundColor: palette.navy, borderRadius: 24, padding: 22, overflow: "hidden" }}>
        <View style={{ position: "absolute", right: -14, top: -22, width: 130, height: 130, borderRadius: 70, borderWidth: 18, borderColor: "rgba(201,162,39,0.18)" }} />
        <Text style={{ color: "#BFD6E8", fontSize: 12, fontWeight: "700", letterSpacing: 1.2 }}>YOUR DIGITAL HYMNAL</Text>
        <Text style={{ color: palette.white, fontSize: 28, fontWeight: "800", lineHeight: 33, marginTop: 8, maxWidth: 230 }}>Find a song for every moment.</Text>
        <Text style={{ color: "#C9D7E3", fontSize: 13, lineHeight: 20, marginTop: 10, maxWidth: 250 }}>Browse worship, gospel and praise songs wherever you gather.</Text>
        <Pressable onPress={() => router.push("/hymns")} style={({ pressed }) => [{ marginTop: 18, alignSelf: "flex-start", backgroundColor: palette.red, paddingHorizontal: 17, paddingVertical: 12, borderRadius: 14 }, pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] }]}><Text style={{ color: palette.white, fontWeight: "800", fontSize: 13 }}>Browse hymns  →</Text></Pressable>
      </View>
      <View style={{ marginTop: 27 }}><SectionHeading title="Explore by category" action="See all" onAction={() => router.push("/categories")} /><ScrollView horizontal showsHorizontalScrollIndicator={false}>{categories.map((category) => <CategoryPill key={category.id} label={category.short} onPress={() => router.push({ pathname: "/hymns", params: { categoryId: String(category.id) } })} />)}</ScrollView></View>
      <View style={{ marginTop: 27 }}><SectionHeading title="Popular hymns" action="View all" onAction={() => router.push("/hymns")} />{hymns.slice(0, 3).map((hymn) => <HymnRow key={hymn.id} hymn={hymn} favorite={favorites.includes(hymn.id)} onToggleFavorite={() => toggleFavorite(hymn.id)} onPress={() => router.push({ pathname: "/hymn/[id]", params: { id: String(hymn.id) } })} />)}</View>
      <View style={{ backgroundColor: "#F1E9D5", borderRadius: 19, padding: 17, marginTop: 12, flexDirection: "row", alignItems: "center" }}><View style={{ width: 38, height: 38, borderRadius: 13, backgroundColor: "#FFF9EA", alignItems: "center", justifyContent: "center" }}><MaterialIcons name="auto-awesome" size={21} color={palette.gold} /></View><View style={{ flex: 1, marginLeft: 12 }}><Text style={{ color: palette.navy, fontWeight: "800", fontSize: 13 }}>A quiet moment</Text><Text style={{ color: "#6E6652", fontSize: 12, marginTop: 3 }}>Let today’s words become your prayer.</Text></View></View>
    </ScrollView>
  </ScreenContainer>;
}
