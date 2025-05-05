"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useI18n } from "@/lib/i18n";
import { useWeaponsForm } from "../../../../hooks/useWeaponsForm";
import { WeaponsConfig } from "@/lib/types";
import { useWeaponTypes } from "../hooks/useWeaponTypes";

export function WeaponCategorySelector() {
  const { t } = useI18n();
  const { oneHandedWeapons, twoHandedWeapons } = useWeaponTypes();
  const { config, updateConfig } = useWeaponsForm();

  const handleCategoryChange = (value: string) => {
    const updates: Partial<WeaponsConfig> = { category: value as 'none' | 'one_handed' | 'two_handed' | 'dual_wield' };
    
    // Set default weapons when changing category
    if (value === "one_handed" && !config.mainHand) {
      updates.mainHand = oneHandedWeapons[0]?.id;
    } else if (value === "two_handed" && !config.twoHanded) {
      updates.twoHanded = twoHandedWeapons[0]?.id;
    } else if (value === "dual_wield") {
      if (!config.mainHand) {
        updates.mainHand = oneHandedWeapons[0]?.id;
      }
      if (!config.offHand) {
        updates.offHand = oneHandedWeapons[0]?.id;
      }
    }
    
    updateConfig(updates);
  };

  return (
    <div>
      <Label className="mb-2 block">
        {t("modules.character-creator.components.forms.WeaponsForm.category.label")}
      </Label>
      <RadioGroup
        value={config.category}
        onValueChange={handleCategoryChange}
        className="grid grid-cols-4 gap-4"
      >
        <div>
          <RadioGroupItem
            value="none"
            id="no-weapons"
            className="peer sr-only"
          />
          <Label
            htmlFor="no-weapons"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            {t("modules.character-creator.components.forms.WeaponsForm.category.none")}
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="one_handed"
            id="one-handed"
            className="peer sr-only"
          />
          <Label
            htmlFor="one-handed"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            {t("modules.character-creator.components.forms.WeaponsForm.category.oneHanded")}
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="two_handed"
            id="two-handed"
            className="peer sr-only"
          />
          <Label
            htmlFor="two-handed"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            {t("modules.character-creator.components.forms.WeaponsForm.category.twoHanded")}
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="dual_wield"
            id="dual-wield"
            className="peer sr-only"
          />
          <Label
            htmlFor="dual-wield"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            {t("modules.character-creator.components.forms.WeaponsForm.category.dualWield")}
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
