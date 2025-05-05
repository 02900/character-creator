"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"
import { useClothingTypes } from "../hooks/useClothingTypes"

export function ClothingTypeSelector() {
  const { t } = useI18n()
  const { clothingTypes } = useClothingTypes()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper function to update clothing type
  const updateClothingType = (value: string) => {
    updateConfig({
      clothing: {
        ...config.clothing,
        type: value as 'casual' | 'formal' | 'warrior' | 'mage' | 'rogue' | 'custom'
      }
    })
  }

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
