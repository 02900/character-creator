import { CompositionConfig, LineArtConfig } from '@/lib/types';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useCompositionForm() {
  const store = useCharacterCreatorStore();
  
  // Extract composition and line art configs
  const { composition, lineArt } = store.config;
  
  // Provide form-specific update methods
  const updateCompositionConfig = (config: Partial<CompositionConfig>) => {
    store.updateComposition(config);
  };
  
  const updateLineArtConfig = (config: Partial<LineArtConfig>) => {
    store.updateLineArt(config);
  };
  
  return {
    config: composition,
    lineArtConfig: lineArt,
    updateConfig: updateCompositionConfig,
    updateLineArtConfig: updateLineArtConfig
  };
}
