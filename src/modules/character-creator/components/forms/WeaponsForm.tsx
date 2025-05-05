"use client";

// Removed unused import
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useI18n } from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useWeaponTypes, WeaponType } from "../../data/useWeaponTypes";

export interface WeaponsConfig {
  category: "one_handed" | "two_handed" | "dual_wield" | "none";
  mainHand?: string;
  offHand?: string;
  twoHanded?: string;
  shield?: boolean;
  enchanted?: boolean;
  style?: "plain" | "ornate" | "magical" | "runic" | "ancient";
}

interface WeaponsFormProps {
  config?: WeaponsConfig;
  updateConfig: (config: WeaponsConfig) => void;
}

export function WeaponsForm({ config = { category: "none" }, updateConfig }: WeaponsFormProps) {
  const { t } = useI18n();
  const { oneHandedWeapons, twoHandedWeapons } = useWeaponTypes();
  
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

  // Handle weapon category change
  const handleCategoryChange = (value: string) => {
    const newConfig = { 
      ...weaponsConfig,
      category: value as WeaponsConfig["category"]
    };
    
    // Reset irrelevant fields based on category
    if (value === "one_handed") {
      newConfig.twoHanded = undefined;
      if (!newConfig.mainHand) {
        newConfig.mainHand = oneHandedWeapons[0]?.id;
      }
    } else if (value === "two_handed") {
      newConfig.mainHand = undefined;
      newConfig.offHand = undefined;
      newConfig.shield = false;
      if (!newConfig.twoHanded) {
        newConfig.twoHanded = twoHandedWeapons[0]?.id;
      }
    } else if (value === "dual_wield") {
      newConfig.twoHanded = undefined;
      newConfig.shield = false;
      if (!newConfig.mainHand) {
        newConfig.mainHand = oneHandedWeapons[0]?.id;
      }
      if (!newConfig.offHand) {
        newConfig.offHand = oneHandedWeapons[0]?.id;
      }
    } else if (value === "none") {
      newConfig.mainHand = undefined;
      newConfig.offHand = undefined;
      newConfig.twoHanded = undefined;
      newConfig.shield = false;
    }
    
    updateConfig(newConfig);
  };

  // Handle main hand weapon change
  const handleMainHandChange = (value: string) => {
    updateConfig({
      ...weaponsConfig,
      mainHand: value
    });
  };

  // Handle off hand weapon change
  const handleOffHandChange = (value: string) => {
    updateConfig({
      ...weaponsConfig,
      offHand: value
    });
  };

  // Handle two handed weapon change
  const handleTwoHandedChange = (value: string) => {
    updateConfig({
      ...weaponsConfig,
      twoHanded: value
    });
  };

  // Handle shield toggle
  const handleShieldToggle = (checked: boolean) => {
    updateConfig({
      ...weaponsConfig,
      shield: checked,
      // If shield is enabled, offHand should be cleared
      offHand: checked ? undefined : weaponsConfig.offHand
    });
  };

  // Handle enchanted toggle
  const handleEnchantedToggle = (checked: boolean) => {
    updateConfig({
      ...weaponsConfig,
      enchanted: checked
    });
  };

  // Handle weapon style change
  const handleStyleChange = (value: string) => {
    updateConfig({
      ...weaponsConfig,
      style: value as WeaponsConfig["style"]
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          {t("modules.character-creator.components.forms.WeaponsForm.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("modules.character-creator.components.forms.WeaponsForm.description")}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="mb-2 block">
            {t("modules.character-creator.components.forms.WeaponsForm.category.label")}
          </Label>
          <RadioGroup
            value={weaponsConfig.category}
            onValueChange={handleCategoryChange}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none" className="cursor-pointer">
                {t("modules.character-creator.components.forms.WeaponsForm.category.none")}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one_handed" id="one_handed" />
              <Label htmlFor="one_handed" className="cursor-pointer">
                {t("modules.character-creator.components.forms.WeaponsForm.category.oneHanded")}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="two_handed" id="two_handed" />
              <Label htmlFor="two_handed" className="cursor-pointer">
                {t("modules.character-creator.components.forms.WeaponsForm.category.twoHanded")}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dual_wield" id="dual_wield" />
              <Label htmlFor="dual_wield" className="cursor-pointer">
                {t("modules.character-creator.components.forms.WeaponsForm.category.dualWield")}
              </Label>
            </div>
          </RadioGroup>
        </div>

        {weaponsConfig.category === "one_handed" && (
          <div className="space-y-4 rounded-md border p-4">
            <div className="space-y-2">
              <Label htmlFor="main-hand">
                {t("modules.character-creator.components.forms.WeaponsForm.mainHand.label")}
              </Label>
              <Select
                value={weaponsConfig.mainHand || ""}
                onValueChange={handleMainHandChange}
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
                checked={weaponsConfig.shield || false}
                onCheckedChange={handleShieldToggle}
              />
            </div>

            {!weaponsConfig.shield && (
              <div className="space-y-2">
                <Label htmlFor="off-hand">
                  {t("modules.character-creator.components.forms.WeaponsForm.offHand.label")}
                </Label>
                <Select
                  value={weaponsConfig.offHand || ""}
                  onValueChange={handleOffHandChange}
                >
                  <SelectTrigger id="off-hand">
                    <SelectValue placeholder={t("modules.character-creator.components.forms.WeaponsForm.offHand.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {oneHandedWeapons.map((weapon: WeaponType) => (
                      <SelectItem key={weapon.id} value={weapon.id}>
                        {weapon.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}

        {weaponsConfig.category === "two_handed" && (
          <div className="space-y-4 rounded-md border p-4">
            <div className="space-y-2">
              <Label htmlFor="two-handed">
                {t("modules.character-creator.components.forms.WeaponsForm.twoHanded.label")}
              </Label>
              <Select
                value={weaponsConfig.twoHanded || ""}
                onValueChange={handleTwoHandedChange}
              >
                <SelectTrigger id="two-handed">
                  <SelectValue placeholder={t("modules.character-creator.components.forms.WeaponsForm.twoHanded.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  {twoHandedWeapons.map((weapon: WeaponType) => (
                    <SelectItem key={weapon.id} value={weapon.id}>
                      {weapon.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {weaponsConfig.category === "dual_wield" && (
          <div className="space-y-4 rounded-md border p-4">
            <div className="space-y-2">
              <Label htmlFor="main-hand-dual">
                {t("modules.character-creator.components.forms.WeaponsForm.mainHand.label")}
              </Label>
              <Select
                value={weaponsConfig.mainHand || ""}
                onValueChange={handleMainHandChange}
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
                value={weaponsConfig.offHand || ""}
                onValueChange={handleOffHandChange}
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
        )}

        {weaponsConfig.category !== "none" && (
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
                checked={weaponsConfig.enchanted || false}
                onCheckedChange={handleEnchantedToggle}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weapon-style">
                {t("modules.character-creator.components.forms.WeaponsForm.style.label")}
              </Label>
              <Select
                value={weaponsConfig.style || "plain"}
                onValueChange={handleStyleChange}
                disabled={!weaponsConfig.mainHand && !weaponsConfig.twoHanded}
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
        )}
      </div>
    </div>
  );
}
