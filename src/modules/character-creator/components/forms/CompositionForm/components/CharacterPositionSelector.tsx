"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCompositionFormStore } from "../store/useCompositionFormStore"

export function CharacterPositionSelector() {
  const { t } = useI18n()
  const { config, updatePosition } = useCompositionFormStore()

  return (
    <div className="grid gap-2">
      <Label htmlFor="character-position">
        {t("modules.character-creator.components.forms.CompositionForm.characterPosition.label")}
      </Label>
      <Select
        value={config.characterPosition}
        onValueChange={updatePosition}
      >
        <SelectTrigger id="character-position">
          <SelectValue
            placeholder={t("modules.character-creator.components.forms.CompositionForm.positionSelect")}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="centered">
            {t("modules.character-creator.components.forms.CompositionForm.characterPosition.options.centered")}
          </SelectItem>
          <SelectItem value="slightly_above_center">
            {t("modules.character-creator.components.forms.CompositionForm.characterPosition.options.slightly_above_center")}
          </SelectItem>
          <SelectItem value="low_center">
            {t("modules.character-creator.components.forms.CompositionForm.characterPosition.options.low_center")}
          </SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        {t("modules.character-creator.components.forms.CompositionForm.characterPosition.description")}
      </p>
    </div>
  )
}
