/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand'
import { EffectsConfig } from '@/lib/types'

interface SpellsFormState {
  config: EffectsConfig
  updateConfig: (config: EffectsConfig) => void
  toggleMagic: (checked: boolean) => void
  updateMagicType: (value: string) => void
  updateMagicIntensity: (value: string) => void
  updateMagicColor: (value: string) => void
  toggleSpirits: (checked: boolean) => void
  toggleMist: (checked: boolean) => void
  toggleGroundCracks: (checked: boolean) => void
}

export const useSpellsFormStore = create<SpellsFormState>((set) => ({
  config: {} as EffectsConfig,
  
  updateConfig: (config) => set({ config }),
  
  toggleMagic: (checked) => set((state) => {
    if (checked && !state.config.magic) {
      return {
        config: {
          ...state.config,
          magic: {
            type: "spiral",
            intensity: "moderate",
            color: "#3b82f6",
          }
        }
      }
    } else if (!checked) {
      // Use object destructuring to remove all magic-related properties
      const { magic, spirits, mist, groundCracks, ...restConfig } = state.config
      return { config: restConfig }
    }
    return { config: state.config } // No change if already has magic and checked is true
  }),
  
  updateMagicType: (value) => set((state) => {
    if (!state.config.magic) return { config: state.config }
    
    return {
      config: {
        ...state.config,
        magic: {
          ...state.config.magic,
          type: value as "spiral" | "orb" | "flame" | "aura" | "lightning" | "water" | "earth" | "wind" | "shadow" | "light"
        }
      }
    }
  }),
  
  updateMagicIntensity: (value) => set((state) => {
    if (!state.config.magic) return { config: state.config }
    
    return {
      config: {
        ...state.config,
        magic: {
          ...state.config.magic,
          intensity: value as "subtle" | "moderate" | "strong" | "overwhelming"
        }
      }
    }
  }),
  
  updateMagicColor: (value) => set((state) => {
    if (!state.config.magic) return { config: state.config }
    
    return {
      config: {
        ...state.config,
        magic: {
          ...state.config.magic,
          color: value
        }
      }
    }
  }),
  
  toggleSpirits: (checked) => set((state) => {
    if (!checked) {
      const { spirits, ...restConfig } = state.config
      return { config: restConfig }
    } else {
      return {
        config: {
          ...state.config,
          spirits: checked
        }
      }
    }
  }),
  
  toggleMist: (checked) => set((state) => {
    if (!checked) {
      const { mist, ...restConfig } = state.config
      return { config: restConfig }
    } else {
      return {
        config: {
          ...state.config,
          mist: checked
        }
      }
    }
  }),
  
  toggleGroundCracks: (checked) => set((state) => {
    if (!checked) {
      const { groundCracks, ...restConfig } = state.config
      return { config: restConfig }
    } else {
      return {
        config: {
          ...state.config,
          groundCracks: checked
        }
      }
    }
  })
}))
