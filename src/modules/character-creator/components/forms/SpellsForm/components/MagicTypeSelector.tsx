"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useMagicTypes } from "@/modules/character-creator/data/useMagicTypes"
import { useSpellsFormStore } from "../store/useSpellsFormStore"

export function MagicTypeSelector() {
  const { t } = useI18n()
  const { magicTypes } = useMagicTypes()
  const { config, updateMagicType } = useSpellsFormStore()

  return (
    <div className="space-y-2">
      <Label htmlFor="magic-type">
        {t("modules.character-creator.components.forms.EffectsForm.magic.type")}
      </Label>
      <Select
        value={config.magic?.type || ""}
        onValueChange={updateMagicType}
      >
        <SelectTrigger id="magic-type">
          <SelectValue
            placeholder={t("modules.character-creator.components.forms.EffectsForm.magic.typeSelect")}
          />
        </SelectTrigger>
        <SelectContent>
          {magicTypes.map((type) => (
            <SelectItem key={type.id} value={type.id}>
              {type.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
