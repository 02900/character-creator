import { create } from 'zustand'
import { BackgroundConfig } from '@/lib/types'

interface BackgroundFormState {
  config: BackgroundConfig
  updateConfig: (config: BackgroundConfig) => void
  toggleClouds: (checked: boolean) => void
  toggleLightning: (checked: boolean) => void
  updateScenery: (value: string) => void
  updateWeatherEffect: (value: string) => void
  updateTimeOfDay: (value: string) => void
  updateParticles: (value: string) => void
}

export const useBackgroundFormStore = create<BackgroundFormState>((set) => ({
  config: {} as BackgroundConfig,
  
  updateConfig: (config) => set({ config }),
  
  toggleClouds: (checked) => set((state) => ({
    config: {
      ...state.config,
      clouds: checked
    }
  })),
  
  toggleLightning: (checked) => set((state) => ({
    config: {
      ...state.config,
      lightning: checked
    }
  })),
  
  updateScenery: (value) => set((state) => ({
    config: {
      ...state.config,
      scenery: value as 'forest' | 'castle' | 'mountain' | 'desert' | 'cave' | 'village' | 'temple' | 'beach' | 'dungeon' | 'city' | 'none'
    }
  })),
  
  updateWeatherEffect: (value) => set((state) => ({
    config: {
      ...state.config,
      weatherEffect: value as 'clear' | 'rain' | 'storm' | 'snow' | 'fog'
    }
  })),
  
  updateTimeOfDay: (value) => set((state) => ({
    config: {
      ...state.config,
      timeOfDay: value as 'dawn' | 'day' | 'dusk' | 'night'
    }
  })),
  
  updateParticles: (value) => set((state) => ({
    config: {
      ...state.config,
      particles: value as 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks'
    }
  }))
}))
