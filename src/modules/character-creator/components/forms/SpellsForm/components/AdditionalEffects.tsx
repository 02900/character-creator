"use client"

import { useI18n } from "@/lib/i18n"
import { useSpellsFormStore } from "../store/useSpellsFormStore"
import { EffectToggle } from "./EffectToggle"

export function AdditionalEffects() {
  const { t } = useI18n()
  const { config, toggleSpirits, toggleMist, toggleGroundCracks } = useSpellsFormStore()

  return (
    <div className="space-y-4">
      <EffectToggle
        id="spirits"
        label={t("modules.character-creator.components.forms.EffectsForm.spirits.label")}
        description={t("modules.character-creator.components.forms.EffectsForm.spirits.description")}
        checked={config.spirits || false}
        onCheckedChange={toggleSpirits}
      />

      <EffectToggle
        id="mist"
        label={t("modules.character-creator.components.forms.EffectsForm.mist.label")}
        description={t("modules.character-creator.components.forms.EffectsForm.mist.description")}
        checked={config.mist || false}
        onCheckedChange={toggleMist}
      />

      <EffectToggle
        id="groundCracks"
        label={t("modules.character-creator.components.forms.EffectsForm.groundCracks.label")}
        description={t("modules.character-creator.components.forms.EffectsForm.groundCracks.description")}
        checked={config.groundCracks || false}
        onCheckedChange={toggleGroundCracks}
      />
    </div>
  )
}
