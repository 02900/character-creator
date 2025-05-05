"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useI18n } from "@/lib/i18n"
import { useRacesClasses } from "@/modules/character-creator/data/useRacesClasses"
import { useRaceClassFormStore } from "../store/useRaceClassFormStore"

export function RaceEffectsSection() {
  const { t } = useI18n()
  const { races } = useRacesClasses()
  const { selectedRace, effectsConfig, toggleRaceEffect } = useRaceClassFormStore()

  const raceName = races.find((r) => r.id === selectedRace)?.name || ""

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-md font-medium mb-3">
          {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.title")}
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.description")} {raceName}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <RadioGroup
              className="grid grid-cols-2 gap-2"
              value={effectsConfig.raceEffects?.elementalAffinity || "none"}
              onValueChange={(value) => toggleRaceEffect("elementalAffinity", value)}
            >
              <Label className="col-span-2 font-semibold mb-1">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.label")}
              </Label>
              {[
                { value: "fire", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.fire") },
                { value: "water", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.water") },
                { value: "earth", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.earth") },
                { value: "air", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.air") },
                { value: "light", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.light") },
                { value: "darkness", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.darkness") },
                { value: "none", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.none") },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={`element-${item.value}`} />
                  <Label htmlFor={`element-${item.value}`}>{item.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="glow">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.glow.label")}
              </Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.glow.description")}
              </div>
            </div>
            <Switch
              id="glow"
              checked={effectsConfig.raceEffects?.glow || false}
              onCheckedChange={(checked) => toggleRaceEffect("glow", checked)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aura-type">
              {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.label")}
            </Label>
            <Select
              value={effectsConfig.raceEffects?.aura || "none"}
              onValueChange={(value) => toggleRaceEffect("aura", value)}
            >
              <SelectTrigger id="aura-type">
                <SelectValue placeholder={t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.placeholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.none")}</SelectItem>
                <SelectItem value="divine">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.divine")}</SelectItem>
                <SelectItem value="demonic">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.demonic")}</SelectItem>
                <SelectItem value="nature">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.nature")}</SelectItem>
                <SelectItem value="arcane">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.arcane")}</SelectItem>
                <SelectItem value="elemental">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.elemental")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="wings">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.wings.label")}</Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.wings.description")}
              </div>
            </div>
            <Switch
              id="wings"
              checked={effectsConfig.raceEffects?.wings || false}
              onCheckedChange={(checked) => toggleRaceEffect("wings", checked)}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="horns">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.horns.label")}</Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.horns.description")}
              </div>
            </div>
            <Switch
              id="horns"
              checked={effectsConfig.raceEffects?.horns || false}
              onCheckedChange={(checked) => toggleRaceEffect("horns", checked)}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="tail">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.tail.label")}</Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.tail.description")}
              </div>
            </div>
            <Switch
              id="tail"
              checked={effectsConfig.raceEffects?.tail || false}
              onCheckedChange={(checked) => toggleRaceEffect("tail", checked)}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="scales">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.scales.label")}</Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.scales.description")}
              </div>
            </div>
            <Switch
              id="scales"
              checked={effectsConfig.raceEffects?.scales || false}
              onCheckedChange={(checked) => toggleRaceEffect("scales", checked)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
