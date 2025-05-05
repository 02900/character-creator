"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useI18n } from "@/lib/i18n"
import { useSpellsFormStore } from "../store/useSpellsFormStore"

export function MagicToggle() {
  const { t } = useI18n()
  const { config, toggleMagic } = useSpellsFormStore()

  return (
    <div className="flex items-center justify-between rounded-lg border p-4 mb-6">
      <div className="space-y-0.5">
        <Label htmlFor="enable-magic">
          {t("modules.character-creator.components.forms.EffectsForm.enableMagic.label")}
        </Label>
        <div className="text-xs text-muted-foreground">
          {t("modules.character-creator.components.forms.EffectsForm.enableMagic.description")}
        </div>
      </div>
      <Switch
        id="enable-magic"
        checked={!!config.magic}
        onCheckedChange={toggleMagic}
      />
    </div>
  )
}
