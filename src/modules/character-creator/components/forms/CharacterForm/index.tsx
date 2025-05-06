"use client"

import { Separator } from "@/components/ui/separator"
import { useCharacterForm } from "../../../hooks/useCharacterForm"
import { FormHeader } from "./components/FormHeader"
import { LevelSlider } from "./components/LevelSlider"
import { ExpressionSelector } from "./components/ExpressionSelector"
import { PoseSelector } from "./components/PoseSelector"
import { MuscleDefinitionSection } from "./components/MuscleDefinitionSection"
import { HandsSection } from "./components/HandsSection"
import { ClothingSection } from "./components/ClothingSection"
// Using central store hook instead of initialization hook

export function CharacterForm() {
  // Now using the centralized store through our hook
  useCharacterForm()

  return (
    <div className="space-y-6">
      <FormHeader />
      
      <div className="space-y-4">
        <LevelSlider />
        <ExpressionSelector />
        <PoseSelector />
        <MuscleDefinitionSection />
        <Separator />
        <HandsSection />
        <Separator />
        <ClothingSection />
      </div>
    </div>
  )
}
