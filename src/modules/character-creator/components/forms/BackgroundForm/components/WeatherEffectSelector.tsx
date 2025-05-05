"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useI18n } from "@/lib/i18n"
import { useBackgroundFormStore } from "../store/useBackgroundFormStore"

export function WeatherEffectSelector() {
  const { t } = useI18n()
  const { config, updateWeatherEffect } = useBackgroundFormStore()

  return (
    <div className="mb-4">
      <Label className="mb-2 block">
        {t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.label')}
      </Label>
      <RadioGroup 
        className="grid grid-cols-2 gap-2 p-4 border rounded-md" 
        value={config.weatherEffect || "clear"}
        onValueChange={updateWeatherEffect}
      >
        {[
          { value: "clear", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.clear') },
          { value: "rain", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.rain') },
          { value: "storm", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.storm') },
          { value: "snow", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.snow') },
          { value: "fog", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.fog') },
        ].map((item) => (
          <div key={item.value} className="flex items-center space-x-2">
            <RadioGroupItem value={item.value} id={`weather-${item.value}`} />
            <Label htmlFor={`weather-${item.value}`}>{item.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
