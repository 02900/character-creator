"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { useI18n } from "@/lib/i18n"
import { useRacesClasses } from "@/modules/character-creator/hooks/useRacesClasses"
import { X } from "lucide-react"
import { useRaceClassForm } from "../../../../hooks/useRaceClassForm"
import { useState } from "react"

export function ClassEffectsSection() {
  const { t } = useI18n()
  const { classes } = useRacesClasses()
  const { config, effectsConfig, updateEffectsConfig } = useRaceClassForm()
  
  // Helper function to toggle class effects
  const toggleClassEffect = (effect: string, value: string | boolean | string[]) => {
    const currentClassEffects = effectsConfig.classEffects || {}
    
    updateEffectsConfig({
      classEffects: {
        ...currentClassEffects,
        [effect]: value
      }
    })
  }
  
  const selectedClass = config.class
  const [newEquipment, setNewEquipment] = useState("")

  const className = classes.find((c) => c.id === selectedClass)?.name || ""

  const handleAddEquipment = () => {
    if (newEquipment.trim()) {
      const equipment = [...(effectsConfig.classEffects?.equipment || []), newEquipment.trim()]
      toggleClassEffect("equipment", equipment)
      setNewEquipment("")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-md font-medium mb-3">
          {t("modules.character-creator.components.forms.RaceClassForm.classEffects.title")}
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          {t("modules.character-creator.components.forms.RaceClassForm.classEffects.description")} {className}
        </p>
      </div>

      <div className="space-y-4">
        <div className="mb-4">
          <Label className="mb-2 block">
            {className} - {t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.label")}
          </Label>
          <RadioGroup
            className="grid grid-cols-2 gap-2 p-4 border rounded-md"
            value={effectsConfig.classEffects?.weapons || "normal"}
            onValueChange={(value) => toggleClassEffect("weapons", value)}
          >
            {[
              { value: "normal", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.normal") },
              { value: "glowing", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.glowing") },
              { value: "runic", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.runic") },
              { value: "elemental", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.elemental") },
              { value: "spectral", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.spectral") },
            ].map((item) => (
              <div key={item.value} className="flex items-center space-x-2">
                <RadioGroupItem value={item.value} id={`weapon-${item.value}`} />
                <Label htmlFor={`weapon-${item.value}`}>{item.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="spellbook">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.spellbook.label")}
            </Label>
            <div className="text-xs text-muted-foreground">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.spellbook.description")}
            </div>
          </div>
          <Switch
            id="spellbook"
            checked={effectsConfig.classEffects?.spellbook || false}
            onCheckedChange={(checked) => toggleClassEffect("spellbook", checked)}
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="familiar">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.familiar.label")}
            </Label>
            <div className="text-xs text-muted-foreground">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.familiar.description")}
            </div>
          </div>
          <Switch
            id="familiar"
            checked={effectsConfig.classEffects?.familiar || false}
            onCheckedChange={(checked) => toggleClassEffect("familiar", checked)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialAbility">
            {t("modules.character-creator.components.forms.RaceClassForm.classEffects.specialAbility.label")}
          </Label>
          <div className="flex space-x-2">
            <Input
              id="specialAbility"
              placeholder={t("modules.character-creator.components.forms.RaceClassForm.classEffects.specialAbility.placeholder")}
              value={effectsConfig.classEffects?.specialAbility || ""}
              onChange={(e) => toggleClassEffect("specialAbility", e.target.value)}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {t("modules.character-creator.components.forms.RaceClassForm.classEffects.specialAbility.description")}
          </p>
        </div>

        <div className="space-y-2">
          <Label className="mb-2 block">
            {t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.label")}
          </Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {(effectsConfig.classEffects?.equipment || []).map((item, index) => (
              <Badge key={index} variant="secondary" className="py-1">
                {item}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 ml-1 p-0"
                  onClick={() => {
                    const newEquipment = [...(effectsConfig.classEffects?.equipment || [])];
                    newEquipment.splice(index, 1);
                    toggleClassEffect("equipment", newEquipment);
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          <div className="flex space-x-2">
            <Input
              value={newEquipment}
              onChange={(e) => setNewEquipment(e.target.value)}
              placeholder={t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.placeholder")}
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter" && newEquipment.trim()) {
                  handleAddEquipment();
                }
              }}
            />
            <Button type="button" onClick={handleAddEquipment}>
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.buttonText")}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.description")}
          </p>
        </div>
      </div>
    </div>
  )
}
