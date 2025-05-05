"use client"

import { useI18n } from "@/lib/i18n"
import { ClothingTypeSelector } from "./ClothingTypeSelector"
import { ClothingFlowSelector } from "./ClothingFlowSelector"
import { PatternsSelector } from "./PatternsSelector"

export function ClothingSection() {
  const { t } = useI18n()

  return (
    <div>
      <h4 className="text-md font-medium mb-3">
        {t('modules.character-creator.components.forms.CharacterForm.clothing.title')}
      </h4>
      <div className="space-y-4">
        <ClothingTypeSelector />
        <ClothingFlowSelector />
        <PatternsSelector />
      </div>
    </div>
  )
}
