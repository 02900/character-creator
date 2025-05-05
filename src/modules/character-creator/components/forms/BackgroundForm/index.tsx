"use client"

import { Separator } from "@/components/ui/separator"
import { useBackgroundForm } from "../../../hooks/useBackgroundForm"
import { FormHeader } from "./components/FormHeader"
import { ScenerySelector } from "./components/ScenerySelector"
import { SkyEffects } from "./components/SkyEffects"
import { EnvironmentSection } from "./components/EnvironmentSection"
// Using central store hook instead of initialization hook

export function BackgroundForm() {
  // Now using the centralized store through our hook
  useBackgroundForm()

  return (
    <div className="space-y-6">
      <FormHeader />
      <div className="space-y-6">
        <ScenerySelector />
        <SkyEffects />
      </div>

      <Separator className="my-8" />
      <EnvironmentSection />
    </div>
  )
}
