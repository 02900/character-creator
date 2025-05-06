"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"

export function MuscleDefinitionSection() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Update muscle definition
  const updateMuscleDefinition = (value: string) => {
    updateConfig({
      muscleDefinition: value as 'slim' | 'athletic' | 'muscular' | 'bulky' | 'heroic' | 'average'
    })
  }

  return (
    <div className="space-y-4">
      <h4 className="text-md font-medium mb-2">
        {t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.title')}
      </h4>
      
      <div className="space-y-2">
        <Label htmlFor="muscle-definition">
          {t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.label')}
        </Label>
        <Select 
          value={config.muscleDefinition || 'average'} 
          onValueChange={updateMuscleDefinition}
        >
          <SelectTrigger id="muscle-definition">
            <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="slim">{t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.slim')}</SelectItem>
            <SelectItem value="athletic">{t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.athletic')}</SelectItem>
            <SelectItem value="average">{t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.average')}</SelectItem>
            <SelectItem value="muscular">{t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.muscular')}</SelectItem>
            <SelectItem value="bulky">{t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.bulky')}</SelectItem>
            <SelectItem value="heroic">{t('modules.character-creator.components.forms.CharacterForm.muscleDefinition.heroic')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
