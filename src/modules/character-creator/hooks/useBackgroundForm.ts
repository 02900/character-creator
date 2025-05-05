import { BackgroundConfig } from '@/lib/types';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useBackgroundForm() {
  const store = useCharacterCreatorStore();
  
  // Extract background config, providing defaults if it doesn't exist
  const background = store.config.background || {};
  
  // Provide a form-specific update method
  const updateBackgroundConfig = (config: Partial<BackgroundConfig>) => {
    store.updateBackground(config);
  };
  
  return {
    config: background,
    updateConfig: updateBackgroundConfig
  };
}
