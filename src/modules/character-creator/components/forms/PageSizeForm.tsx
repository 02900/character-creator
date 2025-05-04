"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ColoringBookIllustrationConfig } from "@/lib/types"
import { useI18n } from "@/lib/i18n"

interface PageSizeFormProps {
  config: ColoringBookIllustrationConfig
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void
}

export function PageSizeForm({ config, updateConfig }: PageSizeFormProps) {
  const { t } = useI18n();
  
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.PageSizeForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.PageSizeForm.description')}
        </p>
      </div>
      
      <RadioGroup
        value={config.pageSize}
        onValueChange={(value) => 
          updateConfig({ pageSize: value as '8.5x11' | 'A4' | 'Letter' })}
        className="grid grid-cols-3 gap-4"
      >
        <div>
          <RadioGroupItem value="8.5x11" id="8.5x11" className="peer sr-only" />
          <Label
            htmlFor="8.5x11"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.PageSizeForm.sizes.85x11')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="A4" id="A4" className="peer sr-only" />
          <Label
            htmlFor="A4"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.PageSizeForm.sizes.A4')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="Letter" id="Letter" className="peer sr-only" />
          <Label
            htmlFor="Letter"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.PageSizeForm.sizes.Letter')}</span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
