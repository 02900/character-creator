"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"

export function LevelSlider() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper function to update level
  const updateLevel = (values: number[]) => {
    updateConfig({ level: values[0] })
  }

  return (
    <div className="grid gap-2 mb-4">
      <div className="flex justify-between">
        <Label htmlFor="character-level">
          {t('modules.character-creator.components.forms.CharacterForm.level.label')}
        </Label>
        <span className="text-sm font-medium">
          {t('modules.character-creator.components.forms.CharacterForm.level.value', { level: String(config.level || 50) })}
        </span>
      </div>
      <Slider
        id="character-level"
        defaultValue={[config.level || 50]}
        min={1}
        max={100}
        step={1}
        onValueChange={updateLevel}
      />
      <p className="text-xs text-muted-foreground">
        {t('modules.character-creator.components.forms.CharacterForm.level.description')}
      </p>
    </div>
  )
}
