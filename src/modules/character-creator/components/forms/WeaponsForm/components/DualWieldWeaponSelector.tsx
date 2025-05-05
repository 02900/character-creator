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
import { useWeaponTypes } from "@/modules/character-creator/data/useWeaponTypes";
import { useWeaponsFormStore } from "../store/useWeaponsFormStore";

export function DualWieldWeaponSelector() {
  const { t } = useI18n();
  const { oneHandedWeapons } = useWeaponTypes();
  const { config, updateMainHand, updateOffHand } = useWeaponsFormStore();

  // Only render when category is dual_wield
  if (config.category !== "dual_wield") return null;

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="main-hand-dual">
          {t("modules.character-creator.components.forms.WeaponsForm.mainHand.label")}
        </Label>
        <Select
          value={config.mainHand || ""}
          onValueChange={updateMainHand}
        >
          <SelectTrigger id="main-hand-dual">
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

      <div className="space-y-2">
        <Label htmlFor="off-hand-dual">
          {t("modules.character-creator.components.forms.WeaponsForm.offHand.label")}
        </Label>
        <Select
          value={config.offHand || ""}
          onValueChange={updateOffHand}
        >
          <SelectTrigger id="off-hand-dual">
            <SelectValue placeholder={t("modules.character-creator.components.forms.WeaponsForm.offHand.placeholder")} />
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
    </div>
  );
}
