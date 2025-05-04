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

interface EffectsFormProps {
  config?: EffectsConfig;
  updateConfig: (config: EffectsConfig) => void;
}

export function EffectsForm({ config = {}, updateConfig }: EffectsFormProps) {
  const { t } = useI18n();
  const handleMagicTypeChange = (value: string) => {
    updateConfig({
      ...config,
      magic: {
        ...(config.magic || { intensity: "strong" }),
        type: value as "spiral" | "orb" | "flame" | "aura",
      },
    });
  };

  const handleMagicIntensityChange = (value: string) => {
    updateConfig({
      ...config,
      magic: {
        ...(config.magic || { type: "spiral" }),
        intensity: value as "subtle" | "strong",
      },
    });
  };

  const handleToggleSpirits = (checked: boolean) => {
    updateConfig({
      ...config,
      spirits: checked,
    });
  };

  const handleToggleMist = (checked: boolean) => {
    updateConfig({
      ...config,
      mist: checked,
    });
  };

  const handleToggleGroundCracks = (checked: boolean) => {
    updateConfig({
      ...config,
      groundCracks: checked,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.EffectsForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.EffectsForm.description')}
        </p>
      </div>

      <div>
        <h4 className="text-md font-medium mb-3">{t('modules.character-creator.components.forms.EffectsForm.magic.title')}</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="magic-type">{t('modules.character-creator.components.forms.EffectsForm.magic.type')}</Label>
            <Select
              value={config.magic?.type || "spiral"}
              onValueChange={handleMagicTypeChange}
            >
              <SelectTrigger id="magic-type">
                <SelectValue placeholder={t('modules.character-creator.components.forms.EffectsForm.typeSelect')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spiral">{t('modules.character-creator.components.forms.EffectsForm.magic.types.spiral')}</SelectItem>
                <SelectItem value="orb">{t('modules.character-creator.components.forms.EffectsForm.magic.types.orb')}</SelectItem>
                <SelectItem value="flame">{t('modules.character-creator.components.forms.EffectsForm.magic.types.flame')}</SelectItem>
                <SelectItem value="aura">{t('modules.character-creator.components.forms.EffectsForm.magic.types.aura')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="magic-intensity">{t('modules.character-creator.components.forms.EffectsForm.magic.intensity')}</Label>
            <Select
              value={config.magic?.intensity || "strong"}
              onValueChange={handleMagicIntensityChange}
            >
              <SelectTrigger id="magic-intensity">
                <SelectValue placeholder={t('modules.character-creator.components.forms.EffectsForm.intensitySelect')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subtle">{t('modules.character-creator.components.forms.EffectsForm.magic.intensities.subtle')}</SelectItem>
                <SelectItem value="strong">{t('modules.character-creator.components.forms.EffectsForm.magic.intensities.strong')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="spirits">{t('modules.character-creator.components.forms.EffectsForm.spirits.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.EffectsForm.spirits.description')}
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
            <Label htmlFor="mist">{t('modules.character-creator.components.forms.EffectsForm.mist.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.EffectsForm.mist.description')}
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
            <Label htmlFor="groundCracks">{t('modules.character-creator.components.forms.EffectsForm.groundCracks.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.EffectsForm.groundCracks.description')}
            </div>
          </div>
          <Switch
            id="groundCracks"
            checked={config.groundCracks || false}
            onCheckedChange={handleToggleGroundCracks}
          />
        </div>
      </div>
    </div>
  );
}
