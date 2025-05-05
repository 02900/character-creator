"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useI18n } from "@/lib/i18n"
import { useStyleFormStore } from "../store/useStyleFormStore"

export function ArtStyleSelector() {
  const { t } = useI18n()
  const { config, updateArtStyle } = useStyleFormStore()
  
  const handleValueChange = (value: string) => {
    updateArtStyle(value as 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon')
  }
  
  return (
    <div>
      <h4 className="text-md font-medium mb-3">
        {t('modules.character-creator.components.forms.StyleForm.artStyle.label')}
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        {t('modules.character-creator.components.forms.StyleForm.artStyle.description')}
      </p>
      
      <RadioGroup
        value={config.artStyle}
        onValueChange={handleValueChange}
        className="grid grid-cols-5 gap-4"
      >
        <ArtStyleOption id="anime" t={t} />
        <ArtStyleOption id="manga" t={t} />
        <ArtStyleOption id="comic" t={t} />
        <ArtStyleOption id="toon" t={t} />
        <ArtStyleOption id="webtoon" t={t} />
      </RadioGroup>
    </div>
  )
}

interface ArtStyleOptionProps {
  id: string
  t: (key: string) => string
}

function ArtStyleOption({ id, t }: ArtStyleOptionProps) {
  return (
    <div>
      <RadioGroupItem value={id} id={id} className="peer sr-only" />
      <Label
        htmlFor={id}
        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <span>{t(`modules.character-creator.components.forms.StyleForm.artStyle.options.${id}`)}</span>
      </Label>
    </div>
  )
}
