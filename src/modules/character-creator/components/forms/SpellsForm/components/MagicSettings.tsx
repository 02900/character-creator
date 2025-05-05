"use client"

import { Separator } from "@/components/ui/separator"
import { useSpellsFormStore } from "../store/useSpellsFormStore"
import { MagicTypeSelector } from "./MagicTypeSelector"
import { MagicIntensitySelector } from "./MagicIntensitySelector"
import { MagicColorPicker } from "./MagicColorPicker"
import { AdditionalEffects } from "./AdditionalEffects"

export function MagicSettings() {
  const { config } = useSpellsFormStore()

  if (!config.magic) return null

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <MagicTypeSelector />
        <MagicIntensitySelector />
      </div>
      
      <MagicColorPicker />
      
      <Separator className="my-4" />
      
      <AdditionalEffects />
    </>
  )
}
