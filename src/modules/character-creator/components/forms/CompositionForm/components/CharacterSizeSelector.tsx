"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCompositionFormStore } from "../store/useCompositionFormStore"

export function CharacterSizeSelector() {
  const { t } = useI18n()
  const { config, updateSizeRatio } = useCompositionFormStore()

  return (
    <div className="grid gap-2">
      <Label htmlFor="character-size">
        {t("modules.character-creator.components.forms.CompositionForm.characterSize.label")}
      </Label>
      <Select
        value={config.characterSizeRatio}
        onValueChange={updateSizeRatio}
      >
        <SelectTrigger id="character-size">
          <SelectValue
            placeholder={t("modules.character-creator.components.forms.CompositionForm.sizeRatioSelect")}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="60%">
            {t("modules.character-creator.components.forms.CompositionForm.characterSize.options.60%")}
          </SelectItem>
          <SelectItem value="70%">
            {t("modules.character-creator.components.forms.CompositionForm.characterSize.options.70%")}
          </SelectItem>
          <SelectItem value="80%">
            {t("modules.character-creator.components.forms.CompositionForm.characterSize.options.80%")}
          </SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        {t("modules.character-creator.components.forms.CompositionForm.characterSize.description")}
      </p>
    </div>
  )
}
