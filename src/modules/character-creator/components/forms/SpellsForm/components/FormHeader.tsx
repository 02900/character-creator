"use client"

import { useI18n } from "@/lib/i18n"

export function FormHeader() {
  const { t } = useI18n()

  return (
    <div>
      <h3 className="text-lg font-medium">
        {t("modules.character-creator.components.forms.EffectsForm.title")}
      </h3>
      <p className="text-sm text-muted-foreground">
        {t("modules.character-creator.components.forms.EffectsForm.description")}
      </p>
    </div>
  )
}
