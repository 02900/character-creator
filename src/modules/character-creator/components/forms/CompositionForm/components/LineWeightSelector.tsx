"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useI18n } from "@/lib/i18n"
import { useCompositionForm } from "../../../../hooks/useCompositionForm"

export function LineWeightSelector() {
  const { t } = useI18n()
  const { lineArtConfig, updateLineArtConfig } = useCompositionForm()

  return (
    <div>
      <h4 className="text-md font-medium mb-2">{t('modules.character-creator.components.forms.LineArtForm.lineWeight')}</h4>
      <RadioGroup
        value={lineArtConfig?.lineWeight || "medium"}
        onValueChange={(value) => 
          updateLineArtConfig({ lineWeight: value as 'bold' | 'medium' | 'fine' })}
        className="grid grid-cols-3 gap-4"
      >
        <div>
          <RadioGroupItem value="bold" id="bold" className="peer sr-only" />
          <Label
            htmlFor="bold"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.LineArtForm.weights.bold')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
          <Label
            htmlFor="medium"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.LineArtForm.weights.medium')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="fine" id="fine" className="peer sr-only" />
          <Label
            htmlFor="fine"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.LineArtForm.weights.fine')}</span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
