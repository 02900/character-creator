import { create } from 'zustand'
import { CharacterConfig } from '@/lib/types'

interface CharacterFormState {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
  updateExpression: (value: string) => void
  updatePose: (value: string) => void
  updateLevel: (value: number[]) => void
  updateRightHand: (value: string) => void
  updateLeftHand: (value: string) => void
  updateClothingType: (value: string) => void
  updateClothingFlow: (value: string) => void
  addPattern: (pattern: string) => void
  removePattern: (index: number) => void
}

export const useCharacterFormStore = create<CharacterFormState>((set) => ({
  config: {} as CharacterConfig,
  
  updateConfig: (config) => set({ config }),
  
  updateExpression: (value) => set((state) => ({
    config: {
      ...state.config,
      expression: value
    }
  })),
  
  updatePose: (value) => set((state) => ({
    config: {
      ...state.config,
      pose: value as 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle'
    }
  })),
  
  updateLevel: (value) => set((state) => ({
    config: {
      ...state.config,
      level: value[0]
    }
  })),
  
  updateRightHand: (value) => set((state) => ({
    config: {
      ...state.config,
      hands: {
        ...state.config.hands,
        right: value as 'none' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'fist' | 'pointing' | 'weapon_grip' | 'magic_circle'
      }
    }
  })),
  
  updateLeftHand: (value) => set((state) => ({
    config: {
      ...state.config,
      hands: {
        ...state.config.hands,
        left: value as 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting'
      }
    }
  })),
  
  updateClothingType: (value) => set((state) => ({
    config: {
      ...state.config,
      clothing: {
        ...state.config.clothing,
        type: value
      }
    }
  })),
  
  updateClothingFlow: (value) => set((state) => ({
    config: {
      ...state.config,
      clothing: {
        ...state.config.clothing,
        flow: value as 'none' | 'dynamic' | 'still'
      }
    }
  })),
  
  addPattern: (pattern) => set((state) => {
    if (pattern.trim() === "") return { config: state.config }
    
    const patterns = state.config.clothing?.patterns || []
    return {
      config: {
        ...state.config,
        clothing: {
          ...state.config.clothing,
          patterns: [...patterns, pattern.trim()]
        }
      }
    }
  }),
  
  removePattern: (index) => set((state) => {
    const patterns = state.config.clothing?.patterns || []
    const updatedPatterns = [...patterns]
    updatedPatterns.splice(index, 1)
    
    return {
      config: {
        ...state.config,
        clothing: {
          ...state.config.clothing,
          patterns: updatedPatterns
        }
      }
    }
  })
}))
