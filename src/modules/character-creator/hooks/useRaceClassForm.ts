import { CharacterConfig, EffectsConfig } from '@/lib/types';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useRaceClassForm() {
  const store = useCharacterCreatorStore();
  
  // Extract the character and effects configuration
  const { character, effects } = store.config;
  
  // Provide a form-specific update method that can update both character and effects
  const updateRaceClassConfig = (
    characterUpdate: Partial<CharacterConfig>, 
    effectsUpdate?: Partial<EffectsConfig>
  ) => {
    store.updateRaceClass(characterUpdate, effectsUpdate);
  };
  
  return {
    config: character,
    effectsConfig: effects || {},
    updateConfig: (characterUpdate: Partial<CharacterConfig>) => {
      updateRaceClassConfig(characterUpdate);
    },
    updateEffectsConfig: (effectsUpdate: Partial<EffectsConfig>) => {
      updateRaceClassConfig({}, effectsUpdate);
    },
    // Combined update method for when both need to be updated together
    updateBoth: updateRaceClassConfig
  };
}
