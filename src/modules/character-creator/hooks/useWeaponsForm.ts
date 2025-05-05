import { WeaponsConfig } from '@/lib/types';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useWeaponsForm() {
  const store = useCharacterCreatorStore();
  
  // Extract weapons config, providing defaults if it doesn't exist
  const weapons = store.config.weapons || { category: 'none' };
  
  // Provide a form-specific update method
  const updateWeaponsConfig = (config: Partial<WeaponsConfig>) => {
    store.updateWeapons(config);
  };
  
  return {
    config: weapons,
    updateConfig: updateWeaponsConfig
  };
}
