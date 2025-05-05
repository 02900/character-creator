"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useBackgroundFormStore } from "../store/useBackgroundFormStore"

export function ParticlesSelector() {
  const { t } = useI18n()
  const { config, updateParticles } = useBackgroundFormStore()

  return (
    <div className="mb-4">
      <Label className="mb-2 block">
        {t('modules.character-creator.components.forms.BackgroundForm.environment.particles.label')}
      </Label>
      <Select
        value={config.particles || "none"}
        onValueChange={updateParticles}
      >
        <SelectTrigger>
          <SelectValue placeholder={t('modules.character-creator.components.forms.BackgroundForm.environment.particles.placeholder')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.none')}</SelectItem>
          <SelectItem value="dust">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.dust')}</SelectItem>
          <SelectItem value="leaves">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.leaves')}</SelectItem>
          <SelectItem value="embers">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.embers')}</SelectItem>
          <SelectItem value="snowflakes">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.snowflakes')}</SelectItem>
          <SelectItem value="sparks">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.sparks')}</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground mt-1">
        {t('modules.character-creator.components.forms.BackgroundForm.environment.particles.description')}
      </p>
    </div>
  )
}
