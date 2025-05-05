import { useEffect } from 'react'
import { BackgroundConfig } from '@/lib/types'
import { useBackgroundFormStore } from '../store/useBackgroundFormStore'

interface UseBackgroundFormInitProps {
  config: BackgroundConfig
  updateConfig: (config: BackgroundConfig) => void
}

export function useBackgroundFormInit({ config, updateConfig }: UseBackgroundFormInitProps) {
  const { updateConfig: updateStoreConfig } = useBackgroundFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateStoreConfig(config)
  }, [config, updateStoreConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useBackgroundFormStore.subscribe(
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
