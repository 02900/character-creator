"use client"

import { CompositionConfig } from "@/lib/types"
import { FormHeader } from "./components/FormHeader"
import { CharacterSizeSelector } from "./components/CharacterSizeSelector"
import { CharacterPositionSelector } from "./components/CharacterPositionSelector"
import { MarginSlider } from "./components/MarginSlider"
import { CharacterHeightSlider } from "./components/CharacterHeightSlider"
import { PageSizeSelector } from "./components/PageSizeSelector"
import { useCompositionFormInit } from "./hooks/useCompositionFormInit"

interface CompositionFormProps {
  config: CompositionConfig
  updateConfig: (config: Partial<CompositionConfig>) => void
}

export function CompositionForm({
  config,
  updateConfig,
}: CompositionFormProps) {
  useCompositionFormInit({ config, updateConfig })

  return (
    <div className="space-y-6">
      <FormHeader />
      <div className="space-y-4">
        <CharacterSizeSelector />
        <CharacterPositionSelector />
        <MarginSlider />
        <CharacterHeightSlider />
      </div>
      <PageSizeSelector />
    </div>
  )
}
