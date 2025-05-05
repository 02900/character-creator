"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useClothingTypes } from "@/modules/character-creator/data/useClothingTypes"
import { useCharacterFormStore } from "../store/useCharacterFormStore"

export function ClothingTypeSelector() {
  const { t } = useI18n()
  const { clothingTypes } = useClothingTypes()
  const { config, updateClothingType } = useCharacterFormStore()

  return (
    <div className="grid gap-2">
      <Label htmlFor="clothing-type">
        {t('modules.character-creator.components.forms.CharacterForm.clothing.type.label')}
      </Label>
      <Select 
        value={config.clothing?.type || ""} 
        onValueChange={updateClothingType}
      >
        <SelectTrigger id="clothing-type">
          <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.clothing.type.placeholder')} />
        </SelectTrigger>
        <SelectContent>
          {clothingTypes.map((clothingType) => (
            <SelectItem key={clothingType.id} value={clothingType.id}>
              {clothingType.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
