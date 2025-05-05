"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useI18n } from "@/lib/i18n"
import { useCompositionFormStore } from "../store/useCompositionFormStore"
import { formatInches, metersToInches } from "../utils/heightConversion"

export function CharacterHeightSlider() {
  const { t } = useI18n()
  const { config, updateHeight } = useCompositionFormStore()

  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <Label htmlFor="character-height">
          {t("modules.character-creator.components.forms.CompositionForm.characterHeight.label")}
        </Label>
        <div className="text-sm space-x-2">
          <span>
            {config.characterHeight?.toFixed(2) ||
              t("modules.character-creator.components.forms.CompositionForm.characterHeight.default")}{" "}
            {t("modules.character-creator.components.forms.CompositionForm.characterHeight.meters")}
          </span>
          <span className="text-muted-foreground">
            ({formatInches(metersToInches(config.characterHeight || 1.7))})
          </span>
        </div>
      </div>
      <Slider
        id="character-height"
        defaultValue={[config.characterHeight || 1.7]}
        max={2.5}
        min={0.5}
        step={0.01}
        onValueChange={updateHeight}
      />
      <p className="text-xs text-muted-foreground">
        {t("modules.character-creator.components.forms.CompositionForm.characterHeight.description")}
      </p>
    </div>
  )
}
