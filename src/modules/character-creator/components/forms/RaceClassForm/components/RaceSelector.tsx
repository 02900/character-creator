"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useRacesClasses } from "@/modules/character-creator/hooks/useRacesClasses"
import { useRaceClassForm } from "../../../../hooks/useRaceClassForm"
import { useState } from "react"
import { useEffect } from "react"

export function RaceSelector() {
  const { t } = useI18n()
  const { races } = useRacesClasses()
  const { config, updateConfig } = useRaceClassForm()
  const [raceDescription, setRaceDescription] = useState<string>("")
  
  const selectedRace = config.race
  
  const updateRace = (value: string) => {
    updateConfig({ race: value })
  }

  useEffect(() => {
    if (selectedRace) {
      const race = races.find((r) => r.id === selectedRace)
      setRaceDescription(race ? race.description : "")
    } else {
      setRaceDescription("")
    }
  }, [selectedRace, races])

  return (
    <div className="space-y-3">
      <div className="grid gap-2">
        <Label htmlFor="race">
          {t("modules.character-creator.components.forms.RaceClassForm.race")}
        </Label>
        <Select value={selectedRace} onValueChange={updateRace}>
          <SelectTrigger id="race">
            <SelectValue
              placeholder={t("modules.character-creator.components.forms.RaceClassForm.raceSelectPlaceholder")}
            />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {races.map((race) => (
              <SelectItem key={race.id} value={race.id}>
                {race.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {raceDescription && (
        <Card>
          <CardContent className="pt-4 px-4 text-sm">
            {raceDescription}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
