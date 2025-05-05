import { create } from "zustand";
import { ColoringBookIllustrationConfig } from "@/lib/types";

interface StyleFormState {
  config: Pick<ColoringBookIllustrationConfig, "artStyle" | "genres">;
  newGenre: string;
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void;
  setNewGenre: (value: string) => void;
  addGenre: () => void;
  removeGenre: (index: number) => void;
  toggleGenre: (genreId: string) => void;
  updateArtStyle: (
    style: "anime" | "manga" | "comic" | "toon" | "webtoon"
  ) => void;
}

export const useStyleFormStore = create<StyleFormState>((set) => ({
  config: {
    artStyle: "anime",
    genres: [],
  },
  newGenre: "",

  updateConfig: (partialConfig) =>
    set((state) => ({
      config: { ...state.config, ...partialConfig },
    })),

  setNewGenre: (value) => set({ newGenre: value }),

  addGenre: () =>
    set((state) => {
      if (state.newGenre.trim() === "") return state;

      const currentGenres = [...state.config.genres];
      if (!currentGenres.includes(state.newGenre.trim())) {
        return {
          config: {
            ...state.config,
            genres: [...currentGenres, state.newGenre.trim()],
          },
          newGenre: "",
        };
      }

      return { newGenre: "" };
    }),

  removeGenre: (index) =>
    set((state) => {
      const currentGenres = [...state.config.genres];
      currentGenres.splice(index, 1);

      return {
        config: {
          ...state.config,
          genres: currentGenres,
        },
      };
    }),

  toggleGenre: (genreId) =>
    set((state) => {
      const currentGenres = [...state.config.genres];
      const genreIndex = currentGenres.indexOf(genreId);

      if (genreIndex >= 0) {
        // Remove if already selected
        currentGenres.splice(genreIndex, 1);
      } else {
        // Add if not selected
        currentGenres.push(genreId);
      }

      return {
        config: {
          ...state.config,
          genres: currentGenres,
        },
      };
    }),

  updateArtStyle: (style) =>
    set((state) => ({
      config: {
        ...state.config,
        artStyle: style,
      },
    })),
}));
