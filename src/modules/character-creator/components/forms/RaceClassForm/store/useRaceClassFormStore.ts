import { create } from 'zustand'
import { CharacterConfig, EffectsConfig } from '@/lib/types'

interface RaceClassFormState {
  config: CharacterConfig
  effectsConfig: EffectsConfig
  selectedRace: string
  selectedClass: string
  raceDescription: string
  classDescription: string
  updateConfig: (config: CharacterConfig) => void
  updateEffectsConfig: (config: EffectsConfig) => void
  updateRace: (value: string) => void
  updateClass: (value: string) => void
  setRaceDescription: (description: string) => void
  setClassDescription: (description: string) => void
  toggleRaceEffect: (property: keyof NonNullable<EffectsConfig["raceEffects"]>, value: boolean | string) => void
  toggleClassEffect: (property: keyof NonNullable<EffectsConfig["classEffects"]>, value: boolean | string | string[]) => void
}

export const useRaceClassFormStore = create<RaceClassFormState>((set) => ({
  config: {} as CharacterConfig,
  effectsConfig: {} as EffectsConfig,
  selectedRace: "",
  selectedClass: "",
  raceDescription: "",
  classDescription: "",
  
  updateConfig: (config) => set({ config }),
  
  updateEffectsConfig: (effectsConfig) => set({ effectsConfig }),
  
  updateRace: (value) => set((state) => ({
    selectedRace: value,
    config: {
      ...state.config,
      race: value
    }
  })),
  
  updateClass: (value) => set((state) => ({
    selectedClass: value,
    config: {
      ...state.config,
      class: value
    }
  })),
  
  setRaceDescription: (description) => set({ raceDescription: description }),
  
  setClassDescription: (description) => set({ classDescription: description }),
  
  toggleRaceEffect: (property, value) => set((state) => ({
    effectsConfig: {
      ...state.effectsConfig,
      raceEffects: {
        ...(state.effectsConfig.raceEffects || {}),
        [property]: value
      }
    }
  })),
  
  toggleClassEffect: (property, value) => set((state) => ({
    effectsConfig: {
      ...state.effectsConfig,
      classEffects: {
        ...(state.effectsConfig.classEffects || {}),
        [property]: value
      }
    }
  }))
}))
