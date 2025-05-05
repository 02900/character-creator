import { useEffect } from 'react'
import { CompositionConfig } from '@/lib/types'
import { useCompositionFormStore } from '../store/useCompositionFormStore'

interface UseCompositionFormInitProps {
  config: CompositionConfig
  updateConfig: (config: Partial<CompositionConfig>) => void
}

export function useCompositionFormInit({ config, updateConfig }: UseCompositionFormInitProps) {
  const { updateConfig: updateStoreConfig } = useCompositionFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateStoreConfig(config)
  }, [config, updateStoreConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useCompositionFormStore.subscribe(
      (state) => {
        // Only update if the config has actually changed
        if (JSON.stringify(state.config) !== JSON.stringify(config)) {
          updateConfig(state.config)
        }
      }
    )
    
    return () => unsubscribe()
  }, [config, updateConfig])
}
