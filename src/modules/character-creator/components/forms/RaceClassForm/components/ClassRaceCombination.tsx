"use client"

import { useI18n } from "@/lib/i18n"
import { useRacesClasses } from "@/modules/character-creator/data/useRacesClasses"
import { useRaceClassFormStore } from "../store/useRaceClassFormStore"

export function ClassRaceCombination() {
  const { t } = useI18n()
  const { races, classes } = useRacesClasses()
  const { selectedRace, selectedClass } = useRaceClassFormStore()

  if (!selectedRace || !selectedClass) return null

  const raceName = races.find((r) => r.id === selectedRace)?.name || selectedRace
  const className = classes.find((c) => c.id === selectedClass)?.name || selectedClass

  return (
    <div className="rounded-md bg-muted p-4">
      <p className="font-medium">
        {t("modules.character-creator.components.forms.RaceClassForm.combination.title")}
      </p>
      <p className="text-sm mt-1">
        {t("modules.character-creator.components.forms.RaceClassForm.combination.description", {
          race: raceName,
          class: className
        })}
      </p>
      <p className="text-sm mt-2">
        {t("modules.character-creator.components.forms.RaceClassForm.combination.effect")}
      </p>
    </div>
  )
}
