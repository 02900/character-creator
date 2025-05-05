"use client"

import { useSpellsForm } from "../../../hooks/useSpellsForm"
import { FormHeader } from "./components/FormHeader"
import { MagicToggle } from "./components/MagicToggle"
import { MagicSettings } from "./components/MagicSettings"
// Using central store hook instead of initialization hook

export function SpellsForm() {
  // Now using the centralized store through our hook
  useSpellsForm()

  return (
    <div className="space-y-6">
      <FormHeader />
      <MagicToggle />
      <MagicSettings />
    </div>
  )
}
