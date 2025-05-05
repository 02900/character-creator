import { useEffect } from 'react'
import { ColoringBookIllustrationConfig } from '@/lib/types'
import { useStyleFormStore } from '../store/useStyleFormStore'

interface UseStyleFormInitProps {
  config: ColoringBookIllustrationConfig
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void
}

export function useStyleFormInit({ config, updateConfig }: UseStyleFormInitProps) {
  const { updateConfig: updateStoreConfig } = useStyleFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateStoreConfig(config)
  }, [config, updateStoreConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useStyleFormStore.subscribe(
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
