"use client"

import { FormHeader } from "./components/FormHeader"
import { ArtStyleSelector } from "./components/ArtStyleSelector"
import { GenreManagement } from "./components/GenreManagement"
import { useStyleForm } from "../../../hooks/useStyleForm"

export function StyleForm() {
  // Use the centralized store through our custom hook
  useStyleForm()

  return (
    <div className="space-y-6">
      <FormHeader />
      <div className="space-y-4">
        <ArtStyleSelector />
        <GenreManagement />
      </div>
    </div>
  )
}
