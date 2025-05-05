import { useEffect } from 'react'
import { CharacterConfig } from '@/lib/types'
import { useCharacterFormStore } from '../store/useCharacterFormStore'

interface UseCharacterFormInitProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
}

export function useCharacterFormInit({ config, updateConfig }: UseCharacterFormInitProps) {
  const { updateConfig: updateStoreConfig } = useCharacterFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateStoreConfig(config)
  }, [config, updateStoreConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useCharacterFormStore.subscribe(
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
