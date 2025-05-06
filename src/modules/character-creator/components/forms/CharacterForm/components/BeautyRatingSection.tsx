"use client"

import { Slider } from "@/components/ui/slider"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function BeautyRatingSection() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Set default value for beauty if not already set
  const beautyValue = config.beauty !== undefined ? config.beauty : 5
  
  // Update beauty value
  const updateBeauty = (value: number[]) => {
    updateConfig({ beauty: value[0] })
  }
  
  // Get text description for current beauty value
  const getBeautyDescription = (value: number) => {
    // Convert number to string when used as key in translation
    return t(`modules.character-creator.components.forms.CharacterForm.beauty.ratings.${value.toString()}`)
  }

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-md font-medium mb-2">
          {t('modules.character-creator.components.forms.CharacterForm.beauty.title')}
        </h4>
        <p className="text-sm text-muted-foreground mb-6">
          {t('modules.character-creator.components.forms.CharacterForm.beauty.description')}
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="beauty-slider">
              {t('modules.character-creator.components.forms.CharacterForm.beauty.label')}
            </Label>
            <span className="text-sm font-medium">
              {t('modules.character-creator.components.forms.CharacterForm.beauty.currentValue', { value: beautyValue.toString() })}
            </span>
          </div>
          
          <Slider
            id="beauty-slider"
            defaultValue={[beautyValue]}
            max={10}
            min={1}
            step={1}
            onValueChange={updateBeauty}
            className="py-2"
          />
        </div>
        
        {/* Description card */}
        <Card className="bg-muted/50">
          <CardContent className="pt-4 pb-3 px-4">
            <p className="text-sm font-medium">
              {getBeautyDescription(beautyValue)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
