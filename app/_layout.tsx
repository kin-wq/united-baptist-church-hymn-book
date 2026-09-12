import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "@/lib/theme-provider";
import { HymnStoreProvider } from "@/lib/hymn-store";
import "../global.css";

export default function RootLayout() {
  return <GestureHandlerRootView style={{ flex: 1 }}><ThemeProvider><HymnStoreProvider><Stack screenOptions={{ headerShown: false }} /></HymnStoreProvider></ThemeProvider></GestureHandlerRootView>;
}
