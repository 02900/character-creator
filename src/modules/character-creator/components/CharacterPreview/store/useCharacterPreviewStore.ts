import { create } from "zustand";
import { ColoringBookIllustrationConfig } from "@/lib/types";

interface CharacterPreviewState {
  config: ColoringBookIllustrationConfig;
  updateConfig: (config: ColoringBookIllustrationConfig) => void;
}

export const useCharacterPreviewStore = create<CharacterPreviewState>((set) => ({
  config: {} as ColoringBookIllustrationConfig,
  updateConfig: (config) => set({ config }),
}));
