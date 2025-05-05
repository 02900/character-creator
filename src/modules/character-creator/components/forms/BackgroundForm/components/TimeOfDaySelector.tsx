"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useI18n } from "@/lib/i18n"
import { useBackgroundForm } from "../../../../hooks/useBackgroundForm"

export function TimeOfDaySelector() {
  const { t } = useI18n()
  const { config, updateConfig } = useBackgroundForm()
  
  // Helper function to update time of day
  const updateTimeOfDay = (value: string) => {
    updateConfig({ timeOfDay: value as 'dawn' | 'day' | 'dusk' | 'night' })
  }

  return (
    <div className="mb-4">
      <Label className="mb-2 block">
        {t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.label')}
      </Label>
      <Card className="p-4 bg-muted/50">
        <CardContent className="p-0">
          <RadioGroup 
            className="grid grid-cols-2 gap-2" 
            value={config.timeOfDay || "day"}
            onValueChange={updateTimeOfDay}
          >
            {[
              { value: "dawn", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.dawn') },
              { value: "day", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.day') },
              { value: "dusk", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.dusk') },
              { value: "night", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.night') },
            ].map((item) => (
              <div key={item.value} className="flex items-center space-x-2">
                <RadioGroupItem value={item.value} id={`time-${item.value}`} />
                <Label htmlFor={`time-${item.value}`}>{item.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}
