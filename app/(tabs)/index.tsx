import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "@/components/screen-container";
import { categories } from "@/data/hymns";
import { palette } from "@/components/hymn-ui";

export default function HomeScreen() {
  return <ScreenContainer containerClassName="bg-[#E9F2F7]" className="px-5">
    <StatusBar style="dark" />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 34 }}>
      <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10, marginBottom: 24 }}>
        <Image source={require("@/assets/images/hymn-logo.png")} style={{ width: 76, height: 76, borderRadius: 22 }} contentFit="contain" />
        <View style={{ marginLeft: 13 }}><Text style={{ color: palette.navy, fontSize: 20, fontWeight: "800" }}>United Baptist Church</Text><Text style={{ color: palette.muted, fontSize: 13, marginTop: 4 }}>Hymn Book</Text></View>
      </View>
      <View style={{ backgroundColor: "rgba(255,255,255,0.48)", borderRadius: 25, borderWidth: 1, borderColor: "rgba(255,255,255,0.78)", padding: 22, marginBottom: 26, shadowColor: "#47727A", shadowOpacity: 0.11, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 2 }}>
        <Text style={{ color: palette.red, fontSize: 12, fontWeight: "800", letterSpacing: 1.1 }}>WELCOME TO WORSHIP</Text>
        <Text style={{ color: palette.navy, fontSize: 28, lineHeight: 34, fontWeight: "800", marginTop: 9 }}>Choose your hymn collection.</Text>
        <Text style={{ color: palette.muted, fontSize: 14, lineHeight: 21, marginTop: 10 }}>Select a category to begin singing, reading and worshipping together.</Text>
        <Text style={{ color: palette.red, fontSize: 13, lineHeight: 20, marginTop: 12, fontWeight: "700" }}>Rumbidzai Mwari • Tiri pamwe mukunamata</Text>
      </View>
      <Text style={{ color: palette.ink, fontSize: 19, fontWeight: "800", marginBottom: 13 }}>Hymn categories</Text>
      {categories.slice(0, 2).map((category, index) => <Pressable key={category.id} onPress={() => router.push({ pathname: "/hymns", params: { categoryId: String(category.id) } })} style={({ pressed }) => [{ backgroundColor: "rgba(255,255,255,0.60)", borderRadius: 23, padding: 18, marginBottom: 13, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "rgba(255,255,255,0.8)", shadowColor: "#47727A", shadowOpacity: 0.1, shadowRadius: 15, shadowOffset: { width: 0, height: 6 }, elevation: 2 }, pressed && { opacity: 0.74, transform: [{ scale: 0.985 }] }]}><View style={{ width: 58, height: 58, borderRadius: 19, backgroundColor: index === 0 ? "rgba(122,17,24,0.12)" : "rgba(23,60,74,0.11)", alignItems: "center", justifyContent: "center" }}><MaterialIcons name={index === 0 ? "music-note" : "auto-awesome"} size={27} color={index === 0 ? palette.red : palette.navy} /></View><View style={{ flex: 1, marginLeft: 15 }}><Text style={{ color: palette.ink, fontSize: 17, fontWeight: "800" }}>{category.name}</Text><Text style={{ color: palette.muted, fontSize: 12, marginTop: 5 }}>{category.short} hymns</Text></View><View style={{ width: 34, height: 34, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.72)", alignItems: "center", justifyContent: "center" }}><MaterialIcons name="arrow-forward" size={19} color={palette.navy} /></View></Pressable>)}
      <Pressable onPress={() => router.push("/hymns")} style={({ pressed }) => [{ alignItems: "center", paddingVertical: 13, marginTop: 5 }, pressed && { opacity: 0.7 }]}><Text style={{ color: palette.red, fontWeight: "800" }}>Browse all hymns  →</Text></Pressable>
      <View style={{ alignItems: "center", marginTop: 25 }}><Text style={{ color: palette.muted, fontSize: 11 }}>Nziyo dzekutenda • Mashoko ekunamata</Text></View>
    </ScrollView>
  </ScreenContainer>;
}
