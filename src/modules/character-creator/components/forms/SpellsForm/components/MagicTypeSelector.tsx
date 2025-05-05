"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useSpellsForm } from "../../../../hooks/useSpellsForm"
import { useMagicTypes } from "../hooks/useMagicTypes"

export function MagicTypeSelector() {
  const { t } = useI18n()
  const { magicTypes } = useMagicTypes()
  const { config, updateConfig } = useSpellsForm()
  
  // Helper function to update magic type
  const updateMagicType = (type: string) => {
    if (!config.magic) return
    
    updateConfig({
      magic: {
        ...config.magic,
        type: type as 'spiral' | 'orb' | 'flame' | 'aura' | 'lightning' | 'water' | 'earth' | 'wind' | 'shadow' | 'light'
      }
    })
  }

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
