import { useEffect } from "react";
import { useWeaponsFormStore } from "../store/useWeaponsFormStore";
import { WeaponsConfig } from "@/lib/types";

interface UseWeaponsFormInitProps {
  config: WeaponsConfig;
  updateConfig: (config: WeaponsConfig) => void;
}

export function useWeaponsFormInit({ config, updateConfig }: UseWeaponsFormInitProps) {
  const { updateConfig: updateStoreConfig } = useWeaponsFormStore();
  
  // Initialize the store with the config from props
  useEffect(() => {
    // Set default values if not provided
    const weaponsConfig: WeaponsConfig = {
      category: config.category,
      mainHand: config.mainHand,
      offHand: config.offHand,
      twoHanded: config.twoHanded,
      shield: config.shield || false,
      enchanted: config.enchanted || false,
      style: config.style || "plain"
    };
    
    updateStoreConfig(weaponsConfig);
  }, [config, updateStoreConfig]);

  // Subscribe to store changes and propagate them to the parent
  useEffect(() => {
    const unsubscribe = useWeaponsFormStore.subscribe(
      (state) => {
        // Only update if the config has actually changed
        if (JSON.stringify(state.config) !== JSON.stringify(config)) {
          updateConfig(state.config);
        }
      }
    );
    
    return () => unsubscribe();
  }, [config, updateConfig]);
}
