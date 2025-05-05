"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useI18n } from "@/lib/i18n"
import { useCompositionFormStore } from "../store/useCompositionFormStore"

export function MarginSlider() {
  const { t } = useI18n()
  const { config, updateMargin } = useCompositionFormStore()

  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <Label htmlFor="margin">
          {t("modules.character-creator.components.forms.CompositionForm.margin.label")}
        </Label>
        <span className="text-sm">
          {config.margin}{" "}
          {t("modules.character-creator.components.forms.CompositionForm.margin.unit")}
        </span>
      </div>
      <Slider
        id="margin"
        defaultValue={[config.margin || 1.0]}
        max={2}
        min={0.25}
        step={0.25}
        onValueChange={updateMargin}
      />
      <p className="text-xs text-muted-foreground">
        {t("modules.character-creator.components.forms.CompositionForm.margin.description")}
      </p>
    </div>
  )
}
