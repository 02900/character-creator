import { create } from 'zustand'
import { CompositionConfig, LineArtConfig } from '@/lib/types'

interface CompositionFormState {
  config: CompositionConfig & { lineArt: LineArtConfig }
  updateConfig: (config: Partial<CompositionConfig>) => void
  updateSizeRatio: (value: string) => void
  updatePosition: (value: string) => void
  updateMargin: (value: number[]) => void
  updateHeight: (value: number[]) => void
  updatePageSize: (value: string) => void
  updateLineWeight: (value: string) => void
  toggleCleanLines: (checked: boolean) => void
}

export const useCompositionFormStore = create<CompositionFormState>((set) => ({
  config: {
    lineArt: {
      lineWeight: 'medium',
      shading: false,
      grayscale: false,
      cleanLines: true
    }
  } as CompositionFormState['config'],
  
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
  })),
  
  updateLineWeight: (value) => set((state) => {
    const lineWeight = value as 'bold' | 'medium' | 'fine';
    return {
      config: {
        ...state.config,
        lineArt: {
          ...state.config.lineArt,
          lineWeight
        }
      }
    };
  }),

  
  toggleCleanLines: (checked) => set((state) => {
    return {
      config: {
        ...state.config,
        lineArt: {
          ...state.config.lineArt,
          cleanLines: checked
        }
      }
    };
  })
}))
