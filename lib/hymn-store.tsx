import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type HymnStoreValue = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
};

const HymnStoreContext = createContext<HymnStoreValue | null>(null);

export function HymnStoreProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    AsyncStorage.multiGet(["hymn-favorites", "hymn-font-size"]).then(([favoritePair, fontPair]) => {
      if (favoritePair[1]) setFavorites(JSON.parse(favoritePair[1]));
      if (fontPair[1]) setFontSize(Number(fontPair[1]));
    }).catch(() => undefined);
  }, []);

  const value = useMemo(() => ({
    favorites,
    toggleFavorite: (id: number) => setFavorites((current) => {
      const next = current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id];
      AsyncStorage.setItem("hymn-favorites", JSON.stringify(next)).catch(() => undefined);
      return next;
    }),
    fontSize,
    setFontSize: (size: number) => {
      const next = Math.min(26, Math.max(15, size));
      setFontSize(next);
      AsyncStorage.setItem("hymn-font-size", String(next)).catch(() => undefined);
    },
  }), [favorites, fontSize]);

  return <HymnStoreContext.Provider value={value}>{children}</HymnStoreContext.Provider>;
}

export function useHymnStore() {
  const store = useContext(HymnStoreContext);
  if (!store) throw new Error("useHymnStore must be used inside HymnStoreProvider");
  return store;
}
