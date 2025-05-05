"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useI18n } from "@/lib/i18n"
import { useCompositionForm } from "../../../../hooks/useCompositionForm"

export function PageSizeSelector() {
  const { t } = useI18n()
  const { config, updateConfig } = useCompositionForm()
  
  // Helper function to update page size
  const updatePageSize = (value: string) => {
    updateConfig({
      pageSize: value as '8.5x11' | 'A4' | 'Letter'
    })
  }

  return (
    <div className="grid gap-2">
      <div>
        <h3 className="text-lg font-medium">
          {t("modules.character-creator.components.forms.PageSizeForm.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("modules.character-creator.components.forms.PageSizeForm.description")}
        </p>
      </div>

      <RadioGroup
        value={config.pageSize}
        onValueChange={updatePageSize}
        className="grid grid-cols-3 gap-4"
      >
        <div>
          <RadioGroupItem
            value="8.5x11"
            id="8.5x11"
            className="peer sr-only"
          />
          <Label
            htmlFor="8.5x11"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>
              {t("modules.character-creator.components.forms.PageSizeForm.sizes.85x11")}
            </span>
          </Label>
        </div>

        <div>
          <RadioGroupItem value="A4" id="A4" className="peer sr-only" />
          <Label
            htmlFor="A4"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>
              {t("modules.character-creator.components.forms.PageSizeForm.sizes.A4")}
            </span>
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="Letter"
            id="Letter"
            className="peer sr-only"
          />
          <Label
            htmlFor="Letter"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>
              {t("modules.character-creator.components.forms.PageSizeForm.sizes.Letter")}
            </span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
