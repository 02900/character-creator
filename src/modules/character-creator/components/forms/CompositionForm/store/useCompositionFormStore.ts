import { create } from 'zustand'
import { CompositionConfig } from '@/lib/types'

interface CompositionFormState {
  config: CompositionConfig
  updateConfig: (config: Partial<CompositionConfig>) => void
  updateSizeRatio: (value: string) => void
  updatePosition: (value: string) => void
  updateMargin: (value: number[]) => void
  updateHeight: (value: number[]) => void
  updatePageSize: (value: string) => void
}

export const useCompositionFormStore = create<CompositionFormState>((set) => ({
  config: {} as CompositionConfig,
  
  updateConfig: (config) => set((state) => ({
    config: { ...state.config, ...config }
  })),
  
  updateSizeRatio: (value) => set((state) => ({
    config: {
      ...state.config,
      characterSizeRatio: value as "60%" | "70%" | "80%"
    }
  })),
  
  updatePosition: (value) => set((state) => ({
    config: {
      ...state.config,
      characterPosition: value as "centered" | "slightly_above_center" | "low_center"
    }
  })),
  
  updateMargin: (value) => set((state) => ({
    config: {
      ...state.config,
      margin: value[0]
    }
  })),
  
  updateHeight: (value) => set((state) => ({
    config: {
      ...state.config,
      characterHeight: value[0]
    }
  })),
  
  updatePageSize: (value) => set((state) => ({
    config: {
      ...state.config,
      pageSize: value as "8.5x11" | "A4" | "Letter"
    }
  }))
}))
