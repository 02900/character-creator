"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { EffectsConfig } from "@/lib/types";
import { useI18n } from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useMagicTypes } from "@/modules/character-creator/data/useMagicTypes";
import { useMagicIntensities } from "@/modules/character-creator/data/useMagicIntensities";

interface SpellsFormProps {
  config?: EffectsConfig;
  updateConfig: (config: EffectsConfig) => void;
}

export function SpellsForm({ config = {}, updateConfig }: SpellsFormProps) {
  const { t } = useI18n();
  const { magicTypes } = useMagicTypes();
  const { magicIntensities } = useMagicIntensities();
  
  const handleToggleMagic = (checked: boolean) => {
    if (checked && !config.magic) {
      updateConfig({
        ...config,
        magic: {
          type: "spiral",
          intensity: "moderate",
          color: "#3b82f6",
        },
      });
    } else if (!checked) {
      // Use object destructuring to remove all magic-related properties
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { magic, spirits, mist, groundCracks, ...restConfig } = config;
      updateConfig(restConfig);
    }
  };

  const handleMagicTypeChange = (value: string) => {
    if (!config.magic) return;

    updateConfig({
      ...config,
      magic: {
        ...config.magic,
        type: value as
          | "spiral"
          | "orb"
          | "flame"
          | "aura"
          | "lightning"
          | "water"
          | "earth"
          | "wind"
          | "shadow"
          | "light",
      },
    });
  };

  const handleMagicIntensityChange = (value: string) => {
    if (!config.magic) return;

    updateConfig({
      ...config,
      magic: {
        ...config.magic,
        intensity: value as "subtle" | "moderate" | "strong" | "overwhelming",
      },
    });
  };

  const handleMagicColorChange = (value: string) => {
    if (!config.magic) return;

    updateConfig({
      ...config,
      magic: {
        ...config.magic,
        color: value,
      },
    });
  };

  const handleToggleSpirits = (checked: boolean) => {
    if (!checked) {
      // Remove the spirits property when disabled
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { spirits, ...restConfig } = config;
      updateConfig(restConfig);
    } else {
      updateConfig({
        ...config,
        spirits: checked,
      });
    }
  };

  const handleToggleMist = (checked: boolean) => {
    if (!checked) {
      // Remove the mist property when disabled
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { mist, ...restConfig } = config;
      updateConfig(restConfig);
    } else {
      updateConfig({
        ...config,
        mist: checked,
      });
    }
  };

  const handleToggleGroundCracks = (checked: boolean) => {
    if (!checked) {
      // Remove the groundCracks property when disabled
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { groundCracks, ...restConfig } = config;
      updateConfig(restConfig);
    } else {
      updateConfig({
        ...config,
        groundCracks: checked,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          {t("modules.character-creator.components.forms.EffectsForm.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t(
            "modules.character-creator.components.forms.EffectsForm.description"
          )}
        </p>
      </div>

      <div className="flex items-center justify-between rounded-lg border p-4 mb-6">
        <div className="space-y-0.5">
          <Label htmlFor="enable-magic">
            {t("modules.character-creator.components.forms.EffectsForm.enableMagic.label")}
          </Label>
          <div className="text-xs text-muted-foreground">
            {t("modules.character-creator.components.forms.EffectsForm.enableMagic.description")}
          </div>
        </div>
        <Switch
          id="enable-magic"
          checked={!!config.magic}
          onCheckedChange={handleToggleMagic}
        />
      </div>

      {config.magic && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="magic-type">
                {t(
                  "modules.character-creator.components.forms.EffectsForm.magic.type"
                )}
              </Label>
              <Select
                value={config.magic?.type || ""}
                onValueChange={handleMagicTypeChange}
              >
                <SelectTrigger id="magic-type">
                  <SelectValue
                    placeholder={t(
                      "modules.character-creator.components.forms.EffectsForm.magic.typeSelect"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  {magicTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="magic-intensity">
                {t(
                  "modules.character-creator.components.forms.EffectsForm.magic.intensity"
                )}
              </Label>
              <Select
                value={config.magic?.intensity || ""}
                onValueChange={handleMagicIntensityChange}
              >
                <SelectTrigger id="magic-intensity">
                  <SelectValue placeholder={t("modules.character-creator.components.forms.EffectsForm.magic.intensitySelect")} />
                </SelectTrigger>
                <SelectContent>
                  {magicIntensities.map((intensity) => (
                    <SelectItem key={intensity.id} value={intensity.id}>
                      {intensity.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <Label htmlFor="magic-color">
              {t("modules.character-creator.components.forms.EffectsForm.magic.color")}
            </Label>
            <div className="flex gap-2">
              <Input
                id="magic-color"
                type="color"
                className="w-12 h-10 p-1"
                value={config.magic?.color || "#3b82f6"}
                onChange={(e) => handleMagicColorChange(e.target.value)}
              />
              <Input
                type="text"
                value={config.magic?.color || "#3b82f6"}
                onChange={(e) => handleMagicColorChange(e.target.value)}
                className="flex-1"
                placeholder={t("modules.character-creator.components.forms.EffectsForm.magic.colorPlaceholder")}
              />
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="spirits">
                  {t("modules.character-creator.components.forms.EffectsForm.spirits.label")}
                </Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.EffectsForm.spirits.description")}
                </div>
              </div>
              <Switch
                id="spirits"
                checked={config.spirits || false}
                onCheckedChange={handleToggleSpirits}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="mist">
                  {t("modules.character-creator.components.forms.EffectsForm.mist.label")}
                </Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.EffectsForm.mist.description")}
                </div>
              </div>
              <Switch
                id="mist"
                checked={config.mist || false}
                onCheckedChange={handleToggleMist}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="groundCracks">
                  {t("modules.character-creator.components.forms.EffectsForm.groundCracks.label")}
                </Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.EffectsForm.groundCracks.description")}
                </div>
              </div>
              <Switch
                id="groundCracks"
                checked={config.groundCracks || false}
                onCheckedChange={handleToggleGroundCracks}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
