"use client"

import { useCompositionForm } from "../../../hooks/useCompositionForm"
import { FormHeader } from "./components/FormHeader"
import { CharacterSizeSelector } from "./components/CharacterSizeSelector"
import { CharacterPositionSelector } from "./components/CharacterPositionSelector"
import { CharacterHeightSlider } from "./components/CharacterHeightSlider"
import { PageSizeSelector } from "./components/PageSizeSelector"
import { LineWeightSelector } from "./components/LineWeightSelector"
import { LineEffectsSection } from "./components/LineEffectsSection"
// Using central store hook instead of initialization hook

export function CompositionForm() {
  // Now using the centralized store through our hook
  useCompositionForm()

  return (
    <div className="space-y-6">
      <FormHeader />
      <div className="space-y-6">
        <div className="space-y-4">
          <LineWeightSelector />
          <LineEffectsSection />
        </div>
        <div className="space-y-4">
          <CharacterSizeSelector />
          <CharacterPositionSelector />
          <CharacterHeightSlider />
        </div>
        <PageSizeSelector />
      </div>
    </div>
  )
}
