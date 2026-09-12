import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { useColors } from "@/hooks/use-colors";

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 10 : Math.max(insets.bottom, 8);
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#7A1118", tabBarInactiveTintColor: "#8795A7", tabBarStyle: { paddingTop: 8, paddingBottom: bottomPadding, height: 60 + bottomPadding, backgroundColor: "#FFFFFF", borderTopColor: "#E6EEF5", borderTopWidth: 1 }, tabBarLabelStyle: { fontSize: 11, fontWeight: "700" } }}>
    <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={23} color={color} /> }} />
    <Tabs.Screen name="hymns" options={{ title: "Hymns", tabBarIcon: ({ color }) => <MaterialIcons name="menu-book" size={23} color={color} /> }} />
    <Tabs.Screen name="categories" options={{ href: null }} />
    <Tabs.Screen name="favorites" options={{ title: "Favorites", tabBarIcon: ({ color }) => <MaterialIcons name="favorite" size={23} color={color} /> }} />
  </Tabs>;
}
