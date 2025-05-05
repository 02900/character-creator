"use client"

import { useI18n } from "@/lib/i18n"
import { WeatherEffectSelector } from "./WeatherEffectSelector"
import { TimeOfDaySelector } from "./TimeOfDaySelector"
import { ParticlesSelector } from "./ParticlesSelector"

export function EnvironmentSection() {
  const { t } = useI18n()

  return (
    <div>
      <h4 className="text-md font-medium mb-3">
        {t('modules.character-creator.components.forms.BackgroundForm.environment.title')}
      </h4>
      <div className="space-y-6">
        <WeatherEffectSelector />
        <TimeOfDaySelector />
        <ParticlesSelector />
      </div>
    </div>
  )
}
