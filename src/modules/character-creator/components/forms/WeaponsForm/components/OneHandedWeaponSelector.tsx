"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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

export function OneHandedWeaponSelector() {
  const { t } = useI18n();
  const { oneHandedWeapons } = useWeaponTypes();
  const { config, updateConfig } = useWeaponsForm();
  
  // Helper function to toggle shield
  const toggleShield = (checked: boolean) => {
    updateConfig({ shield: checked });
  };
  
  // Helper function to update main hand
  const updateMainHand = (value: string) => {
    updateConfig({ mainHand: value });
  };

  // Only render when category is one_handed
  if (config.category !== "one_handed") return null;

  return (
    <div className="mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="main-hand">
          {t("modules.character-creator.components.forms.WeaponsForm.mainHand.label")}
        </Label>
        <Select
          value={config.mainHand || ""}
          onValueChange={updateMainHand}
        >
          <SelectTrigger id="main-hand">
            <SelectValue placeholder={t("modules.character-creator.components.forms.WeaponsForm.mainHand.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            {oneHandedWeapons.map((weapon) => (
              <SelectItem key={weapon.id} value={weapon.id}>
                {weapon.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between rounded-lg border p-3">
        <div className="space-y-0.5">
          <Label htmlFor="shield">
            {t("modules.character-creator.components.forms.WeaponsForm.shield.label")}
          </Label>
          <div className="text-xs text-muted-foreground">
            {t("modules.character-creator.components.forms.WeaponsForm.shield.description")}
          </div>
        </div>
        <Switch
          id="shield"
          checked={config.shield || false}
          onCheckedChange={toggleShield}
        />
      </div>
    </div>
  );
}
