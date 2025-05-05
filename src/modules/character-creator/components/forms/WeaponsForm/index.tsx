"use client";

import { FormHeader } from "./components/FormHeader";
import { WeaponCategorySelector } from "./components/WeaponCategorySelector";
import { OneHandedWeaponSelector } from "./components/OneHandedWeaponSelector";
import { TwoHandedWeaponSelector } from "./components/TwoHandedWeaponSelector";
import { DualWieldWeaponSelector } from "./components/DualWieldWeaponSelector";
import { WeaponSettings } from "./components/WeaponSettings";
import { useWeaponsForm } from "../../../hooks/useWeaponsForm";

export function WeaponsForm() {
  // Now using the centralized store through our hook
  useWeaponsForm();

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
