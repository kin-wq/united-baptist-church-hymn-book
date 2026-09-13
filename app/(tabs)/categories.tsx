import { router } from "expo-router";
import { ScrollView, Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScreenContainer } from "@/components/screen-container";
import { categories, hymns } from "@/data/hymns";
import { palette } from "@/components/hymn-ui";

export default function CategoriesScreen() {
  return <ScreenContainer containerClassName="bg-[#E9F2F7]" className="px-5"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
    <Text style={{ color: palette.navy, fontSize: 28, fontWeight: "800", marginTop: 12 }}>Categories</Text><Text style={{ color: palette.muted, marginTop: 5, marginBottom: 22 }}>Find the right words for your gathering.</Text>
    {categories.map((category) => { const count = hymns.filter((hymn) => hymn.categoryId === category.id).length; return <Pressable key={category.id} onPress={() => router.push({ pathname: "/hymns", params: { categoryId: String(category.id) } })} style={({ pressed }) => [{ backgroundColor: palette.white, borderRadius: 22, padding: 18, marginBottom: 13, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#E6EEF5" }, pressed && { opacity: 0.75 }]}><View style={{ width: 50, height: 50, borderRadius: 17, backgroundColor: category.id % 2 ? "#F3E5E7" : "#E6F0F6", alignItems: "center", justifyContent: "center" }}><MaterialIcons name={category.icon as any} size={24} color={category.id % 2 ? palette.red : palette.navy} /></View><View style={{ flex: 1, marginLeft: 14 }}><Text style={{ color: palette.ink, fontWeight: "800", fontSize: 16 }}>{category.name}</Text><Text style={{ color: palette.muted, fontSize: 12, marginTop: 4 }}>{category.short} · {count} hymns in this view</Text></View><MaterialIcons name="chevron-right" size={23} color={palette.muted} /></Pressable>; })}
  </ScrollView></ScreenContainer>;
}
