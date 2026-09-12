import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, TextInput, View } from "react-native";
import type { Hymn } from "@/data/hymns";
import { formatNumber } from "@/data/hymns";

export const palette = {
  navy: "#102A43",
  navy2: "#173B59",
  red: "#7A1118",
  redSoft: "#A9323A",
  paper: "#F8FAFC",
  ink: "#132238",
  muted: "#6B7C93",
  line: "#D9E7F2",
  gold: "#C9A227",
  white: "#FFFFFF",
};

export function SearchField({ value, onChangeText, placeholder = "Search hymns, titles or words..." }: { value: string; onChangeText: (value: string) => void; placeholder?: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 18, paddingHorizontal: 15, height: 52, borderWidth: 1, borderColor: palette.line }}>
      <MaterialIcons name="search" size={22} color={palette.muted} />
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#8191A6" style={{ flex: 1, marginLeft: 10, color: palette.ink, fontSize: 14 }} returnKeyType="search" />
      {value ? <Pressable onPress={() => onChangeText("")}><MaterialIcons name="close" size={19} color={palette.muted} /></Pressable> : null}
    </View>
  );
}

export function SectionHeading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 13 }}>
    <Text style={{ color: palette.ink, fontSize: 19, fontWeight: "800" }}>{title}</Text>
    {action ? <Pressable onPress={onAction} hitSlop={8}><Text style={{ color: palette.red, fontWeight: "700", fontSize: 13 }}>{action}  →</Text></Pressable> : null}
  </View>;
}

export function HymnRow({ hymn, favorite, onToggleFavorite, onPress }: { hymn: Hymn; favorite: boolean; onToggleFavorite: () => void; onPress: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [{ flexDirection: "row", alignItems: "center", backgroundColor: palette.white, borderRadius: 18, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: "#E6EEF5" }, pressed && { opacity: 0.7, transform: [{ scale: 0.99 }] }]}>
    <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: "#EDF4F8", alignItems: "center", justifyContent: "center" }}><Text style={{ color: palette.navy, fontSize: 12, fontWeight: "800" }}>{formatNumber(hymn.number)}</Text></View>
    <View style={{ flex: 1, marginLeft: 13 }}><Text numberOfLines={1} style={{ color: palette.ink, fontSize: 15, fontWeight: "800" }}>{hymn.title}</Text><Text style={{ color: palette.muted, fontSize: 12, marginTop: 4 }}>{hymn.category}</Text></View>
    <Pressable onPress={onToggleFavorite} hitSlop={10} style={{ padding: 6 }}><MaterialIcons name={favorite ? "favorite" : "favorite-border"} size={23} color={favorite ? palette.red : palette.muted} /></Pressable>
  </Pressable>;
}

export function CategoryPill({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [{ paddingHorizontal: 15, paddingVertical: 10, borderRadius: 16, marginRight: 8, backgroundColor: active ? palette.red : palette.white, borderWidth: 1, borderColor: active ? palette.red : palette.line }, pressed && { opacity: 0.75 }]}><Text style={{ color: active ? palette.white : palette.navy, fontWeight: "700", fontSize: 12 }}>{label}</Text></Pressable>;
}
