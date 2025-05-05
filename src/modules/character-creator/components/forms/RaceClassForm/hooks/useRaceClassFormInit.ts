import { useEffect } from 'react'
import { CharacterConfig, EffectsConfig } from '@/lib/types'
import { useRaceClassFormStore } from '../store/useRaceClassFormStore'

interface UseRaceClassFormInitProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
  effectsConfig?: EffectsConfig
  updateEffectsConfig?: (config: EffectsConfig) => void
}

export function useRaceClassFormInit({ 
  config, 
  updateConfig, 
  effectsConfig = {}, 
  updateEffectsConfig 
}: UseRaceClassFormInitProps) {
  const { 
    updateConfig: updateStoreConfig, 
    updateEffectsConfig: updateStoreEffectsConfig,
    updateRace,
    updateClass
  } = useRaceClassFormStore()
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateStoreConfig(config)
    updateRace(config.race || "")
    updateClass(config.class || "")
  }, [config, updateStoreConfig, updateRace, updateClass])

  // Initialize effects config
  useEffect(() => {
    updateStoreEffectsConfig(effectsConfig)
  }, [effectsConfig, updateStoreEffectsConfig])

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useRaceClassFormStore.subscribe(
      (state) => {
        // Only update if the config has actually changed
        if (JSON.stringify(state.config) !== JSON.stringify(config)) {
          updateConfig(state.config)
        }
        
        // Only update effects if updateEffectsConfig is provided and effectsConfig has changed
        if (updateEffectsConfig && JSON.stringify(state.effectsConfig) !== JSON.stringify(effectsConfig)) {
          updateEffectsConfig(state.effectsConfig)
        }
      }
    )
    
    return () => unsubscribe()
  }, [config, updateConfig, effectsConfig, updateEffectsConfig])
}
