"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useBackgroundForm } from "../../../../hooks/useBackgroundForm"
import { useSceneryTypes } from "../hooks/useSceneryTypes"

export function ScenerySelector() {
  const { t } = useI18n()
  const { sceneryTypes } = useSceneryTypes()
  const { config, updateConfig } = useBackgroundForm()
  
  // Helper function to update scenery
  const updateScenery = (value: string) => {
    updateConfig({ scenery: value as 'none' | 'forest' | 'castle' | 'mountain' | 'desert' | 'cave' | 'village' | 'temple' | 'beach' | 'dungeon' | 'city' })
  }

  return (
    <div className="mb-6 space-y-2">
      <Label>{t('modules.character-creator.components.forms.BackgroundForm.scenery.label')}</Label>
      <div className="text-xs text-muted-foreground mb-2">
        {t('modules.character-creator.components.forms.BackgroundForm.scenery.description')}
      </div>
      <Select
        value={config.scenery || "none"}
        onValueChange={updateScenery}
      >
        <SelectTrigger>
          <SelectValue placeholder={t('modules.character-creator.components.forms.BackgroundForm.scenery.placeholder')} />
        </SelectTrigger>
        <SelectContent>
          {sceneryTypes.map((scenery) => (
            <SelectItem key={scenery.id} value={scenery.id}>
              {scenery.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
