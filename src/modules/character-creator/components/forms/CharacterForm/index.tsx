"use client"

import { Separator } from "@/components/ui/separator"
import { CharacterConfig } from "@/lib/types"
import { FormHeader } from "./components/FormHeader"
import { LevelSlider } from "./components/LevelSlider"
import { ExpressionSelector } from "./components/ExpressionSelector"
import { PoseSelector } from "./components/PoseSelector"
import { HandsSection } from "./components/HandsSection"
import { ClothingSection } from "./components/ClothingSection"
import { useCharacterFormInit } from "./hooks/useCharacterFormInit"

interface CharacterFormProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
}

export function CharacterForm({ config, updateConfig }: CharacterFormProps) {
  useCharacterFormInit({ config, updateConfig })

  return (
    <div className="space-y-6">
      <FormHeader />
      
      <div className="space-y-4">
        <LevelSlider />
        <ExpressionSelector />
        <PoseSelector />
        <Separator />
        <HandsSection />
        <Separator />
        <ClothingSection />
      </div>
    </div>
  )
}
