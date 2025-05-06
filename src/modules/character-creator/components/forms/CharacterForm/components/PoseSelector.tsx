"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"
import { useState } from "react"

// Define pose type to avoid repetition and ensure type safety
type PoseType = 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle' | 
               'action_ready' | 'casting' | 'dynamic_movement' | 'defensive' | 'meditative'

export function PoseSelector() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  const [selectedPose, setSelectedPose] = useState<PoseType>(config.pose as PoseType)
  
  // Helper function to update pose
  const updatePose = (value: string) => {
    // Cast the value to our PoseType
    const typedPose = value as PoseType
    setSelectedPose(typedPose)
    updateConfig({ pose: typedPose })
  }
  
  // Get current pose description
  const getPoseDescription = () => {
    return t(`modules.character-creator.components.forms.CharacterForm.poses.${selectedPose}.description`)
  }

  return (
    <div className="space-y-4">
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
            {/* Classic poses */}
            <SelectItem value="frontal">{t('modules.character-creator.components.forms.CharacterForm.poses.frontal.name')}</SelectItem>
            <SelectItem value="three_quarter">{t('modules.character-creator.components.forms.CharacterForm.poses.three_quarter.name')}</SelectItem>
            <SelectItem value="side">{t('modules.character-creator.components.forms.CharacterForm.poses.side.name')}</SelectItem>
            <SelectItem value="low_angle">{t('modules.character-creator.components.forms.CharacterForm.poses.low_angle.name')}</SelectItem>
            <SelectItem value="high_angle">{t('modules.character-creator.components.forms.CharacterForm.poses.high_angle.name')}</SelectItem>
            
            {/* New action poses */}
            <SelectItem value="action_ready">{t('modules.character-creator.components.forms.CharacterForm.poses.action_ready.name')}</SelectItem>
            <SelectItem value="casting">{t('modules.character-creator.components.forms.CharacterForm.poses.casting.name')}</SelectItem>
            <SelectItem value="dynamic_movement">{t('modules.character-creator.components.forms.CharacterForm.poses.dynamic_movement.name')}</SelectItem>
            <SelectItem value="defensive">{t('modules.character-creator.components.forms.CharacterForm.poses.defensive.name')}</SelectItem>
            <SelectItem value="meditative">{t('modules.character-creator.components.forms.CharacterForm.poses.meditative.name')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Description card */}
      <Card className="bg-muted/50">
        <CardContent className="pt-4 pb-3 px-4">
          <h4 className="text-sm font-medium mb-1">
            {t('modules.character-creator.components.forms.CharacterForm.poseDescription')}
          </h4>
          <p className="text-sm text-muted-foreground">
            {getPoseDescription()}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
