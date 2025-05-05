"use client";

import { FormHeader } from "./components/FormHeader";
import { WeaponCategorySelector } from "./components/WeaponCategorySelector";
import { OneHandedWeaponSelector } from "./components/OneHandedWeaponSelector";
import { TwoHandedWeaponSelector } from "./components/TwoHandedWeaponSelector";
import { DualWieldWeaponSelector } from "./components/DualWieldWeaponSelector";
import { WeaponSettings } from "./components/WeaponSettings";
import { useWeaponsFormInit } from "./hooks/useWeaponsFormInit";
import { WeaponsConfig } from "@/lib/types";

interface WeaponsFormProps {
  config?: WeaponsConfig;
  updateConfig: (config: WeaponsConfig) => void;
}

export function WeaponsForm({ config = { category: "none" }, updateConfig }: WeaponsFormProps) {
  useWeaponsFormInit({ config, updateConfig });

  return (
    <div className="space-y-6">
      <FormHeader />
      <div className="space-y-4">
        <WeaponCategorySelector />
        <OneHandedWeaponSelector />
        <TwoHandedWeaponSelector />
        <DualWieldWeaponSelector />
        <WeaponSettings />
      </div>
    </div>
  );
}
