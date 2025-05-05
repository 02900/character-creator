"use client"

import { Separator } from "@/components/ui/separator"
import { BackgroundConfig } from "@/lib/types"
import { FormHeader } from "./components/FormHeader"
import { ScenerySelector } from "./components/ScenerySelector"
import { SkyEffects } from "./components/SkyEffects"
import { EnvironmentSection } from "./components/EnvironmentSection"
import { useBackgroundFormInit } from "./hooks/useBackgroundFormInit"

interface BackgroundFormProps {
  config?: BackgroundConfig
  updateConfig: (config: BackgroundConfig) => void
}

export function BackgroundForm({ config = {}, updateConfig }: BackgroundFormProps) {
  useBackgroundFormInit({ config, updateConfig })

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
