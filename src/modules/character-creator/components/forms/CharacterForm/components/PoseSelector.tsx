"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"

export function PoseSelector() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper function to update pose
  const updatePose = (value: string) => {
    updateConfig({ pose: value as 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle' })
  }

  return (
    <div className="grid gap-2">
      <Label htmlFor="pose">
        {t('modules.character-creator.components.forms.CharacterForm.pose')}
      </Label>
      <Select 
        value={config.pose} 
        onValueChange={updatePose}
      >
        <SelectTrigger id="pose">
          <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.poseSelect')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="frontal">{t('modules.character-creator.components.forms.CharacterForm.poses.frontal')}</SelectItem>
          <SelectItem value="three_quarter">{t('modules.character-creator.components.forms.CharacterForm.poses.three_quarter')}</SelectItem>
          <SelectItem value="side">{t('modules.character-creator.components.forms.CharacterForm.poses.side')}</SelectItem>
          <SelectItem value="low_angle">{t('modules.character-creator.components.forms.CharacterForm.poses.low_angle')}</SelectItem>
          <SelectItem value="high_angle">{t('modules.character-creator.components.forms.CharacterForm.poses.high_angle')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
