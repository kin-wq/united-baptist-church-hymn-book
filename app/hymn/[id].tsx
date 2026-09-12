import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import * as Clipboard from "expo-clipboard";
import { Pressable, ScrollView, Share, Text, View } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { ScreenContainer } from "@/components/screen-container";
import { getHymn, getHymnText } from "@/data/hymns";
import { palette } from "@/components/hymn-ui";
import { useHymnStore } from "@/lib/hymn-store";

export default function HymnReaderScreen() {
  useKeepAwake();
  const { id } = useLocalSearchParams<{ id: string }>();
  const hymn = getHymn(Number(id));
  const { favorites, toggleFavorite, fontSize, setFontSize } = useHymnStore();
  const isFavorite = favorites.includes(hymn.id);
  const shareHymn = async () => { await Share.share({ message: `${hymn.title}\n\n${getHymnText(hymn)}` }); };
  const copyHymn = async () => { await Clipboard.setStringAsync(getHymnText(hymn)); };
  return <ScreenContainer containerClassName="bg-[#FFFDFC]" className="px-5" edges={["top", "left", "right"]}>
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 10, paddingBottom: 15 }}><Pressable onPress={() => router.back()} hitSlop={10}><MaterialIcons name="arrow-back" size={25} color={palette.navy} /></Pressable><View style={{ alignItems: "center" }}><Text style={{ color: palette.red, fontSize: 11, fontWeight: "800", letterSpacing: 1.3 }}>HYMN {String(hymn.number).padStart(3, "0")}</Text><Text numberOfLines={1} style={{ color: palette.navy, fontWeight: "800", maxWidth: 190, marginTop: 3 }}>{hymn.title}</Text></View><Pressable onPress={() => toggleFavorite(hymn.id)} hitSlop={10}><MaterialIcons name={isFavorite ? "favorite" : "favorite-border"} size={25} color={isFavorite ? palette.red : palette.navy} /></Pressable></View>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 35 }}><View style={{ backgroundColor: "#F3E5E7", borderRadius: 22, padding: 19, marginBottom: 22 }}><Text style={{ color: palette.red, fontWeight: "800", fontSize: 12, letterSpacing: 1 }}>WORDS OF WORSHIP</Text><Text style={{ color: palette.navy, fontSize: 25, lineHeight: 31, fontWeight: "800", marginTop: 7 }}>{hymn.title}</Text><Text style={{ color: "#7F5D62", fontSize: 13, marginTop: 8 }}>{hymn.category}</Text></View>
      {hymn.stanzas.map((stanza) => <View key={stanza.id} style={{ marginBottom: 26 }}><Text style={{ color: palette.red, fontWeight: "800", fontSize: 13, letterSpacing: 0.5, marginBottom: 9 }}>{stanza.title.toUpperCase()}</Text><Text style={{ color: palette.ink, fontSize, lineHeight: fontSize * 1.65 }}>{stanza.content}</Text></View>)}
      <View style={{ backgroundColor: "#F4F7FA", borderRadius: 18, padding: 14, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}><Text style={{ color: palette.muted, fontSize: 12, fontWeight: "700" }}>Reading size</Text><View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}><Pressable onPress={() => setFontSize(fontSize - 1)} style={{ width: 35, height: 35, borderRadius: 12, backgroundColor: palette.white, alignItems: "center", justifyContent: "center" }}><Text style={{ color: palette.navy, fontWeight: "800" }}>A−</Text></Pressable><Text style={{ color: palette.navy, fontWeight: "800", minWidth: 27, textAlign: "center" }}>{fontSize}</Text><Pressable onPress={() => setFontSize(fontSize + 1)} style={{ width: 35, height: 35, borderRadius: 12, backgroundColor: palette.white, alignItems: "center", justifyContent: "center" }}><Text style={{ color: palette.navy, fontWeight: "800" }}>A+</Text></Pressable></View></View>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}><Pressable onPress={shareHymn} style={{ flex: 1, flexDirection: "row", gap: 7, alignItems: "center", justifyContent: "center", backgroundColor: palette.navy, borderRadius: 15, paddingVertical: 13 }}><MaterialIcons name="share" size={17} color={palette.white} /><Text style={{ color: palette.white, fontWeight: "800", fontSize: 12 }}>Share</Text></Pressable><Pressable onPress={copyHymn} style={{ flex: 1, flexDirection: "row", gap: 7, alignItems: "center", justifyContent: "center", backgroundColor: "#E6F0F6", borderRadius: 15, paddingVertical: 13 }}><MaterialIcons name="content-copy" size={17} color={palette.navy} /><Text style={{ color: palette.navy, fontWeight: "800", fontSize: 12 }}>Copy lyrics</Text></Pressable></View>
    </ScrollView>
  </ScreenContainer>;
}
