import { create } from "zustand";
import { WeaponsConfig } from "@/lib/types";

interface WeaponsFormState {
  config: WeaponsConfig;
  updateConfig: (config: Partial<WeaponsConfig>) => void;
  updateCategory: (value: string) => void;
  updateMainHand: (value: string) => void;
  updateOffHand: (value: string) => void;
  updateTwoHanded: (value: string) => void;
  toggleShield: (checked: boolean) => void;
  toggleEnchanted: (checked: boolean) => void;
  updateStyle: (value: string) => void;
}

export const useWeaponsFormStore = create<WeaponsFormState>((set) => ({
  config: {
    category: "none",
    shield: false,
    enchanted: false,
    style: "plain",
  },

  updateConfig: (partialConfig) =>
    set((state) => ({
      config: { ...state.config, ...partialConfig },
    })),

  updateCategory: (value) =>
    set((state) => {
      const newConfig = {
        ...state.config,
        category: value as WeaponsConfig["category"],
      };

      // Reset irrelevant fields based on category
      if (value === "one_handed") {
        newConfig.twoHanded = undefined;
      } else if (value === "two_handed") {
        newConfig.mainHand = undefined;
        newConfig.offHand = undefined;
        newConfig.shield = false;
      } else if (value === "dual_wield") {
        newConfig.twoHanded = undefined;
        newConfig.shield = false;
      } else if (value === "none") {
        newConfig.mainHand = undefined;
        newConfig.offHand = undefined;
        newConfig.twoHanded = undefined;
        newConfig.shield = false;
      }

      return { config: newConfig };
    }),

  updateMainHand: (value) =>
    set((state) => ({
      config: {
        ...state.config,
        mainHand: value,
      },
    })),

  updateOffHand: (value) =>
    set((state) => ({
      config: {
        ...state.config,
        offHand: value,
      },
    })),

  updateTwoHanded: (value) =>
    set((state) => ({
      config: {
        ...state.config,
        twoHanded: value,
      },
    })),

  toggleShield: (checked) =>
    set((state) => ({
      config: {
        ...state.config,
        shield: checked,
        // If shield is enabled, offHand should be cleared
        offHand: checked ? undefined : state.config.offHand,
      },
    })),

  toggleEnchanted: (checked) =>
    set((state) => ({
      config: {
        ...state.config,
        enchanted: checked,
      },
    })),

  updateStyle: (value) =>
    set((state) => ({
      config: {
        ...state.config,
        style: value as WeaponsConfig["style"],
      },
    })),
}));
