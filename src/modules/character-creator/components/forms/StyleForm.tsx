"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ColoringBookIllustrationConfig } from "@/lib/types"
import { useI18n } from "@/lib/i18n"

interface StyleFormProps {
  config: ColoringBookIllustrationConfig
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void
}

export function StyleForm({ config, updateConfig }: StyleFormProps) {
  const { t } = useI18n();
  
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.StyleForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.StyleForm.description')}
        </p>
      </div>
      
      <RadioGroup
        value={config.style}
        onValueChange={(value) => 
          updateConfig({ style: value as 'anime' | 'chibi' | 'dark_fantasy' | 'isekai' | 'manga' })}
        className="grid grid-cols-3 gap-4"
      >
        <div>
          <RadioGroupItem value="anime" id="anime" className="peer sr-only" />
          <Label
            htmlFor="anime"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.StyleForm.styles.anime')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="chibi" id="chibi" className="peer sr-only" />
          <Label
            htmlFor="chibi"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.StyleForm.styles.chibi')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="dark_fantasy" id="dark_fantasy" className="peer sr-only" />
          <Label
            htmlFor="dark_fantasy"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.StyleForm.styles.dark_fantasy')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="isekai" id="isekai" className="peer sr-only" />
          <Label
            htmlFor="isekai"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.StyleForm.styles.isekai')}</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="manga" id="manga" className="peer sr-only" />
          <Label
            htmlFor="manga"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>{t('modules.character-creator.components.forms.StyleForm.styles.manga')}</span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
