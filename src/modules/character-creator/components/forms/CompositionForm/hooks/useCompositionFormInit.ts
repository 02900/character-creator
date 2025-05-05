import { useEffect } from 'react'
import { CompositionConfig, LineArtConfig } from '@/lib/types'
import { useCompositionFormStore } from '../store/useCompositionFormStore'

interface UseCompositionFormInitProps {
  config: CompositionConfig
  updateConfig: (config: Partial<CompositionConfig>) => void
  lineArtConfig?: LineArtConfig
  updateLineArtConfig?: (config: LineArtConfig) => void
}

export function useCompositionFormInit({ 
  config, 
  updateConfig,
  lineArtConfig,
  updateLineArtConfig 
}: UseCompositionFormInitProps) {
  const { updateConfig: updateStoreConfig } = useCompositionFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    const combinedConfig = {
      ...config,
      lineArt: lineArtConfig || {
        lineWeight: 'fine',
        shading: false,
        grayscale: false,
        cleanLines: true
      }
    }
    updateStoreConfig(combinedConfig)
  }, [config, lineArtConfig, updateStoreConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useCompositionFormStore.subscribe(
      (state) => {
        // Extract compositional properties and line art properties
        const { lineArt, ...compositionProps } = state.config;
        
        // Update composition config if it has changed
        if (JSON.stringify(compositionProps) !== JSON.stringify(config)) {
          updateConfig(compositionProps);
        }
        
        // Update line art config if available and changed
        if (updateLineArtConfig && lineArt && 
            JSON.stringify(lineArt) !== JSON.stringify(lineArtConfig)) {
          updateLineArtConfig(lineArt);
        }
      }
    )
    
    return () => unsubscribe()
  }, [config, updateConfig, lineArtConfig, updateLineArtConfig])
}
