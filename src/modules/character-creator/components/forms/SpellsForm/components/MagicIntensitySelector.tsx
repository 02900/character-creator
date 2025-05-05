"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useSpellsForm } from "../../../../hooks/useSpellsForm"
import { useMagicIntensities } from "../hooks/useMagicIntensities"

export function MagicIntensitySelector() {
  const { t } = useI18n()
  const { magicIntensities } = useMagicIntensities()
  const { config, updateConfig } = useSpellsForm()
  
  // Helper function to update magic intensity
  const updateMagicIntensity = (intensity: string) => {
    if (!config.magic) return
    
    updateConfig({
      magic: {
        ...config.magic,
        intensity: intensity as 'subtle' | 'moderate' | 'strong' | 'overwhelming'
      }
    })
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="magic-intensity">
        {t("modules.character-creator.components.forms.EffectsForm.magic.intensity")}
      </Label>
      <Select
        value={config.magic?.intensity || ""}
        onValueChange={updateMagicIntensity}
      >
        <SelectTrigger id="magic-intensity">
          <SelectValue placeholder={t("modules.character-creator.components.forms.EffectsForm.magic.intensitySelect")} />
        </SelectTrigger>
        <SelectContent>
          {magicIntensities.map((intensity) => (
            <SelectItem key={intensity.id} value={intensity.id}>
              {intensity.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
