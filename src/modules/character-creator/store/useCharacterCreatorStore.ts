import { create } from 'zustand';
import { 
  ColoringBookIllustrationConfig, 
  CharacterConfig, 
  LineArtConfig,
  BackgroundConfig,
  CompositionConfig,
  WeaponsConfig,
  EffectsConfig,
  defaultConfig
} from '@/lib/types';
import { generateDefaultName } from '../utils/characterStorage';

interface CharacterCreatorState {
  // Full configuration
  config: ColoringBookIllustrationConfig;
  characterName: string;
  isEditMode: boolean;
  
  // General actions
  resetConfig: () => void;
  loadConfig: (config: ColoringBookIllustrationConfig) => void;
  setCharacterName: (name: string) => void;
  setEditMode: (isEdit: boolean) => void;
  
  // Partial updates for specific forms
  updateStyle: (artStyle: string, genres: string[]) => void;
  updateCharacter: (character: Partial<CharacterConfig>) => void;
  updateLineArt: (lineArt: Partial<LineArtConfig>) => void;
  updateRaceClass: (character: Partial<CharacterConfig>, effects?: Partial<EffectsConfig>) => void;
  updateWeapons: (weapons: Partial<WeaponsConfig>) => void;
  updateEffects: (effects: Partial<EffectsConfig>) => void;
  updateBackground: (background: Partial<BackgroundConfig>) => void;
  updateComposition: (composition: Partial<CompositionConfig>) => void;
}

export const useCharacterCreatorStore = create<CharacterCreatorState>((set) => ({
  config: { ...defaultConfig },
  characterName: generateDefaultName(defaultConfig),
  isEditMode: false,
  
  resetConfig: () => set({ 
    config: { ...defaultConfig },
    characterName: generateDefaultName(defaultConfig),
    isEditMode: false
  }),
  
  loadConfig: (config) => set({ config }),
  
  setCharacterName: (name) => set({ characterName: name }),
  
  setEditMode: (isEdit) => set({ isEditMode: isEdit }),
  
  updateStyle: (artStyle, genres) => set((state) => ({
    config: {
      ...state.config,
      artStyle: artStyle as 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon',
      genres
    }
  })),
  
  updateCharacter: (character) => set((state) => ({
    config: {
      ...state.config,
      character: {
        ...state.config.character,
        ...character
      }
    }
  })),
  
  updateLineArt: (lineArt) => set((state) => ({
    config: {
      ...state.config,
      lineArt: {
        ...state.config.lineArt,
        ...lineArt
      }
    }
  })),
  
  updateRaceClass: (character, effects) => set((state) => ({
    config: {
      ...state.config,
      character: {
        ...state.config.character,
        ...character
      },
      effects: effects ? {
        ...state.config.effects,
        ...effects
      } : state.config.effects
    }
  })),
  
  updateWeapons: (weapons) => set((state) => {
    // Ensure there's a default weapons object with a category if none exists
    const currentWeapons = state.config.weapons || { category: 'none' };
    return {
      config: {
        ...state.config,
        weapons: {
          ...currentWeapons,
          ...weapons
        }
      }
    };
  }),
  
  updateEffects: (effects) => set((state) => ({
    config: {
      ...state.config,
      effects: {
        ...state.config.effects,
        ...effects
      }
    }
  })),
  
  updateBackground: (background) => set((state) => ({
    config: {
      ...state.config,
      background: {
        ...state.config.background,
        ...background
      }
    }
  })),
  
  updateComposition: (composition) => set((state) => ({
    config: {
      ...state.config,
      composition: {
        ...state.config.composition,
        ...composition
      }
    }
  }))
}));
