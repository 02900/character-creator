"use client"

import { Separator } from "@/components/ui/separator"
import { CharacterConfig, EffectsConfig } from "@/lib/types"
import { FormHeader } from "./components/FormHeader"
import { RaceSelector } from "./components/RaceSelector"
import { ClassSelector } from "./components/ClassSelector"
import { ClassRaceCombination } from "./components/ClassRaceCombination"
import { RaceEffectsSection } from "./components/RaceEffectsSection"
import { ClassEffectsSection } from "./components/ClassEffectsSection"
import { useRaceClassFormInit } from "./hooks/useRaceClassFormInit"
import { useRaceClassFormStore } from "./store/useRaceClassFormStore"

interface RaceClassFormProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
  effectsConfig?: EffectsConfig
  updateEffectsConfig?: (config: EffectsConfig) => void
}

export function RaceClassForm({
  config,
  updateConfig,
  effectsConfig = {},
  updateEffectsConfig,
}: RaceClassFormProps) {
  useRaceClassFormInit({ config, updateConfig, effectsConfig, updateEffectsConfig })
  const { selectedRace, selectedClass } = useRaceClassFormStore()

  return (
    <div className="space-y-6">
      <FormHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RaceSelector />
        <ClassSelector />
      </div>

      <Separator />

      <div>
        {selectedRace && selectedClass && <ClassRaceCombination />}
      </div>

      <Separator className="my-8" />

      <RaceEffectsSection />

      <Separator className="my-8" />

      <ClassEffectsSection />
    </div>
  )
}
