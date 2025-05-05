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
import { useWeaponsForm } from "../../../../hooks/useWeaponsForm";

export function WeaponSettings() {
  const { t } = useI18n();
  const { config, updateConfig } = useWeaponsForm();
  
  // Helper functions to toggle enchanted and update style
  const toggleEnchanted = (checked: boolean) => {
    updateConfig({ enchanted: checked });
  };
  
  const updateStyle = (value: string) => {
    updateConfig({ style: value as 'plain' | 'ornate' | 'magical' | 'runic' | 'ancient' });
  };

  // Only render when a weapon category is selected
  if (config.category === "none") return null;

  // Check if a weapon is selected
  const hasWeapon = !!config.mainHand || !!config.twoHanded;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg border p-3">
        <div className="space-y-0.5">
          <Label htmlFor="enchanted">
            {t("modules.character-creator.components.forms.WeaponsForm.enchanted.label")}
          </Label>
          <div className="text-xs text-muted-foreground">
            {t("modules.character-creator.components.forms.WeaponsForm.enchanted.description")}
          </div>
        </div>
        <Switch
          id="enchanted"
          checked={config.enchanted || false}
          onCheckedChange={toggleEnchanted}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="weapon-style">
          {t("modules.character-creator.components.forms.WeaponsForm.style.label")}
        </Label>
        <Select
          value={config.style || "plain"}
          onValueChange={updateStyle}
          disabled={!hasWeapon}
        >
          <SelectTrigger id="weapon-style">
            <SelectValue placeholder={t("modules.character-creator.components.forms.WeaponsForm.style.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="plain">
              {t("modules.character-creator.components.forms.WeaponsForm.style.options.plain")}
            </SelectItem>
            <SelectItem value="ornate">
              {t("modules.character-creator.components.forms.WeaponsForm.style.options.ornate")}
            </SelectItem>
            <SelectItem value="magical">
              {t("modules.character-creator.components.forms.WeaponsForm.style.options.magical")}
            </SelectItem>
            <SelectItem value="runic">
              {t("modules.character-creator.components.forms.WeaponsForm.style.options.runic")}
            </SelectItem>
            <SelectItem value="ancient">
              {t("modules.character-creator.components.forms.WeaponsForm.style.options.ancient")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
