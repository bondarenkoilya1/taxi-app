import type { MapData } from "types";

export const GOOGLE_MAP: MapData = {
  API_KEY: (import.meta.env.VITE_GOOGLE_MAP_API_KEY || "") as string,
  ID: (import.meta.env.VITE_GOOGLE_MAP_ID || "") as string
};
