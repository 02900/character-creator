"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useI18n } from "@/lib/i18n"
import { useBackgroundForm } from "../../../../hooks/useBackgroundForm"

export function SkyEffects() {
  const { t } = useI18n()
  const { config, updateConfig } = useBackgroundForm()
  
  // Helper functions to toggle sky effects
  const toggleClouds = (checked: boolean) => {
    updateConfig({ clouds: checked })
  }
  
  const toggleLightning = (checked: boolean) => {
    updateConfig({ lightning: checked })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="clouds">{t('modules.character-creator.components.forms.BackgroundForm.clouds.label')}</Label>
          <div className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.BackgroundForm.clouds.description')}
          </div>
        </div>
        <Switch
          id="clouds"
          checked={config.clouds || false}
          onCheckedChange={toggleClouds}
        />
      </div>
      
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="lightning">{t('modules.character-creator.components.forms.BackgroundForm.lightning.label')}</Label>
          <div className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.BackgroundForm.lightning.description')}
          </div>
        </div>
        <Switch
          id="lightning"
          checked={config.lightning || false}
          onCheckedChange={toggleLightning}
        />
      </div>
    </div>
  )
}
