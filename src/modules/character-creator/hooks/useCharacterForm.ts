import { CharacterConfig } from '@/lib/types';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useCharacterForm() {
  const store = useCharacterCreatorStore();
  
  // Extract only the character config
  const { character } = store.config;
  
  // Provide a form-specific update method
  const updateCharacterConfig = (config: Partial<CharacterConfig>) => {
    store.updateCharacter(config);
  };
  
  return {
    config: character,
    updateConfig: updateCharacterConfig
  };
}
