"use client"

import { ColoringBookIllustrationConfig } from "@/lib/types"
import { FormHeader } from "./components/FormHeader"
import { ArtStyleSelector } from "./components/ArtStyleSelector"
import { GenreManagement } from "./components/GenreManagement"
import { useStyleFormInit } from "./hooks/useStyleFormInit"

interface StyleFormProps {
  config: ColoringBookIllustrationConfig
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void
}

export function StyleForm({ config, updateConfig }: StyleFormProps) {
  useStyleFormInit({ config, updateConfig })

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
