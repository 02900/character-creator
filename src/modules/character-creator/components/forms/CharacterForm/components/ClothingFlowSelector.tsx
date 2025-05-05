"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"

export function ClothingFlowSelector() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper function to update clothing flow
  const updateClothingFlow = (value: string) => {
    updateConfig({
      clothing: {
        ...config.clothing,
        flow: value as 'none' | 'dynamic' | 'still'
      }
    })
  }

  return (
    <div className="grid gap-2">
      <Label htmlFor="clothing-flow">
        {t('modules.character-creator.components.forms.CharacterForm.clothing.flow')}
      </Label>
      <Select 
        value={config.clothing?.flow || "dynamic"} 
        onValueChange={updateClothingFlow}
      >
        <SelectTrigger id="clothing-flow">
          <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.flowStyleSelect')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">{t('modules.character-creator.components.forms.CharacterForm.clothing.flowTypes.none')}</SelectItem>
          <SelectItem value="dynamic">{t('modules.character-creator.components.forms.CharacterForm.clothing.flowTypes.dynamic')}</SelectItem>
          <SelectItem value="still">{t('modules.character-creator.components.forms.CharacterForm.clothing.flowTypes.still')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
