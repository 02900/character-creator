"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useI18n } from "@/lib/i18n"
import { useCompositionFormStore } from "../store/useCompositionFormStore"

export function LineEffectsSection() {
  const { t } = useI18n()
  const { config, toggleCleanLines } = useCompositionFormStore()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label htmlFor="cleanLines">{t('modules.character-creator.components.forms.LineArtForm.cleanLines.label')}</Label>
          <div className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.LineArtForm.cleanLines.description')}
          </div>
        </div>
        <Switch
          id="cleanLines"
          checked={config.lineArt?.cleanLines || false}
          onCheckedChange={toggleCleanLines}
        />
      </div>
      
      <div className="flex items-center justify-between rounded-lg border p-4 bg-muted/50">
        <div className="space-y-0.5">
          <Label htmlFor="shading" className="text-muted-foreground">{t('modules.character-creator.components.forms.LineArtForm.shading.label')}</Label>
          <div className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.LineArtForm.shading.description')}
          </div>
        </div>
        <Switch
          id="shading"
          checked={false}
          disabled={true}
        />
      </div>
      
      <div className="flex items-center justify-between rounded-lg border p-4 bg-muted/50">
        <div className="space-y-0.5">
          <Label htmlFor="grayscale" className="text-muted-foreground">{t('modules.character-creator.components.forms.LineArtForm.grayscale.label')}</Label>
          <div className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.LineArtForm.grayscale.description')}
          </div>
        </div>
        <Switch
          id="grayscale"
          checked={false}
          disabled={true}
        />
      </div>
    </div>
  )
}
