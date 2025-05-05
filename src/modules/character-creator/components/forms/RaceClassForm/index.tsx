"use client"

import { Separator } from "@/components/ui/separator"
import { useRaceClassForm } from "../../../hooks/useRaceClassForm"
import { FormHeader } from "./components/FormHeader"
import { RaceSelector } from "./components/RaceSelector"
import { ClassSelector } from "./components/ClassSelector"
import { ClassRaceCombination } from "./components/ClassRaceCombination"
import { RaceEffectsSection } from "./components/RaceEffectsSection"
import { ClassEffectsSection } from "./components/ClassEffectsSection"

export function RaceClassForm() {
  // Using the centralized store through our hook
  const { config } = useRaceClassForm()

  return (
    <div className="space-y-6">
      <FormHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RaceSelector />
        <ClassSelector />
      </div>

      <Separator />

      <div>
        {config.race && config.class && <ClassRaceCombination />}
      </div>

      <Separator className="my-8" />

      <RaceEffectsSection />

      <Separator className="my-8" />

      <ClassEffectsSection />
    </div>
  )
}
