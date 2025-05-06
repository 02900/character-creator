"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"

// Define sex type to avoid repetition and ensure type safety
type SexType = 'male' | 'female' | 'undefined'

export function SexSelector() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper function to update sex
  const updateSex = (value: string) => {
    // Cast the value to our SexType
    const typedSex = value as SexType
    updateConfig({ sex: typedSex })
  }

  return (
    <div className="space-y-2">
      <h4 className="text-md font-medium mb-2">
        {t('modules.character-creator.components.forms.CharacterForm.sex.title')}
      </h4>
      
      <div className="grid gap-2">
        <Label htmlFor="sex-selector">
          {t('modules.character-creator.components.forms.CharacterForm.sex.label')}
        </Label>
        <Select 
          value={config.sex || 'undefined'} 
          onValueChange={updateSex}
        >
          <SelectTrigger id="sex-selector">
            <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.sex.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">{t('modules.character-creator.components.forms.CharacterForm.sex.male')}</SelectItem>
            <SelectItem value="female">{t('modules.character-creator.components.forms.CharacterForm.sex.female')}</SelectItem>
            <SelectItem value="undefined">{t('modules.character-creator.components.forms.CharacterForm.sex.undefined')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
