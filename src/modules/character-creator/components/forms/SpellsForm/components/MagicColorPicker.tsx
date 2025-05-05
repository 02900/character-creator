"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/lib/i18n"
import { useSpellsFormStore } from "../store/useSpellsFormStore"

export function MagicColorPicker() {
  const { t } = useI18n()
  const { config, updateMagicColor } = useSpellsFormStore()

  const colorValue = config.magic?.color || "#3b82f6"

  return (
    <div className="space-y-2 mt-4">
      <Label htmlFor="magic-color">
        {t("modules.character-creator.components.forms.EffectsForm.magic.color")}
      </Label>
      <div className="flex gap-2">
        <Input
          id="magic-color"
          type="color"
          className="w-12 h-10 p-1"
          value={colorValue}
          onChange={(e) => updateMagicColor(e.target.value)}
        />
        <Input
          type="text"
          value={colorValue}
          onChange={(e) => updateMagicColor(e.target.value)}
          className="flex-1"
          placeholder={t("modules.character-creator.components.forms.EffectsForm.magic.colorPlaceholder")}
        />
      </div>
    </div>
  )
}
