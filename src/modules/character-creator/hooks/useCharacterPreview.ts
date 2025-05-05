import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useCharacterPreview() {
  const store = useCharacterCreatorStore();
  
  // The preview needs access to the full configuration
  return {
    config: store.config
  };
}
