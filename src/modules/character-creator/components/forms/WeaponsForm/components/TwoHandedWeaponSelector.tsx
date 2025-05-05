"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useI18n } from "@/lib/i18n";
import { useWeaponTypes } from "../hooks/useWeaponTypes";
import { useWeaponsForm } from "../../../../hooks/useWeaponsForm";

export function TwoHandedWeaponSelector() {
  const { t } = useI18n();
  const { twoHandedWeapons } = useWeaponTypes();
  const { config, updateConfig } = useWeaponsForm();
  
  // Helper function to update two-handed weapon
  const updateTwoHanded = (value: string) => {
    updateConfig({ twoHanded: value });
  };

  // Only render when category is two_handed
  if (config.category !== "two_handed") return null;

  return (
    <div className="mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="two-handed-weapon">
          {t("modules.character-creator.components.forms.WeaponsForm.twoHanded.label")}
        </Label>
        <Select
          value={config.twoHanded || ""}
          onValueChange={updateTwoHanded}
        >
          <SelectTrigger id="two-handed-weapon">
            <SelectValue placeholder={t("modules.character-creator.components.forms.WeaponsForm.twoHanded.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            {twoHandedWeapons.map((weapon) => (
              <SelectItem key={weapon.id} value={weapon.id}>
                {weapon.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
