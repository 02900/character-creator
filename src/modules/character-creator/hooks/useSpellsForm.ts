import { EffectsConfig } from '@/lib/types';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useSpellsForm() {
  const store = useCharacterCreatorStore();
  
  // Extract effects config, providing defaults if it doesn't exist
  const effects = store.config.effects || {};
  
  // Provide a form-specific update method
  const updateEffectsConfig = (config: Partial<EffectsConfig>) => {
    store.updateEffects(config);
  };
  
  return {
    config: effects,
    updateConfig: updateEffectsConfig
  };
}
