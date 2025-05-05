"use client"

import { EffectsConfig } from "@/lib/types"
import { FormHeader } from "./components/FormHeader"
import { MagicToggle } from "./components/MagicToggle"
import { MagicSettings } from "./components/MagicSettings"
import { useSpellsFormInit } from "./hooks/useSpellsFormInit"

interface SpellsFormProps {
  config?: EffectsConfig
  updateConfig: (config: EffectsConfig) => void
}

export function SpellsForm({ config = {}, updateConfig }: SpellsFormProps) {
  useSpellsFormInit({ config, updateConfig })

  return (
    <div className="space-y-6">
      <FormHeader />
      <MagicToggle />
      <MagicSettings />
    </div>
  )
}
