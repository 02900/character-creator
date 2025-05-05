import { useEffect } from 'react'
import { EffectsConfig } from '@/lib/types'
import { useSpellsFormStore } from '../store/useSpellsFormStore'

interface UseSpellsFormInitProps {
  config?: EffectsConfig
  updateConfig: (config: EffectsConfig) => void
}

export function useSpellsFormInit({ config = {}, updateConfig }: UseSpellsFormInitProps) {
  const { updateConfig: updateStoreConfig } = useSpellsFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateStoreConfig(config)
  }, [config, updateStoreConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useSpellsFormStore.subscribe(
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
