"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CompositionConfig } from "@/lib/types"
import { useI18n } from "@/lib/i18n"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select"

interface CompositionFormProps {
  config: CompositionConfig
  updateConfig: (config: CompositionConfig) => void
}

export function CompositionForm({ config, updateConfig }: CompositionFormProps) {
  const { t } = useI18n();
  const handleSizeRatioChange = (value: string) => {
    updateConfig({
      ...config,
      characterSizeRatio: value as '60%' | '70%' | '80%'
    })
  }

  const handlePositionChange = (value: string) => {
    updateConfig({
      ...config,
      characterPosition: value as 'centered' | 'slightly_above_center' | 'low_center'
    })
  }

  const handleMarginChange = (value: number[]) => {
    updateConfig({
      ...config,
      margin: value[0]
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.CompositionForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.CompositionForm.description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="character-size">{t('modules.character-creator.components.forms.CompositionForm.characterSize.label')}</Label>
          <Select 
            value={config.characterSizeRatio} 
            onValueChange={handleSizeRatioChange}
          >
            <SelectTrigger id="character-size">
              <SelectValue placeholder={t('modules.character-creator.components.forms.CompositionForm.sizeRatioSelect')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="60%">{t('modules.character-creator.components.forms.CompositionForm.characterSize.options.60%')}</SelectItem>
              <SelectItem value="70%">{t('modules.character-creator.components.forms.CompositionForm.characterSize.options.70%')}</SelectItem>
              <SelectItem value="80%">{t('modules.character-creator.components.forms.CompositionForm.characterSize.options.80%')}</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.CompositionForm.characterSize.description')}
          </p>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="character-position">{t('modules.character-creator.components.forms.CompositionForm.characterPosition.label')}</Label>
          <Select 
            value={config.characterPosition} 
            onValueChange={handlePositionChange}
          >
            <SelectTrigger id="character-position">
              <SelectValue placeholder={t('modules.character-creator.components.forms.CompositionForm.positionSelect')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="centered">{t('modules.character-creator.components.forms.CompositionForm.characterPosition.options.centered')}</SelectItem>
              <SelectItem value="slightly_above_center">{t('modules.character-creator.components.forms.CompositionForm.characterPosition.options.slightly_above_center')}</SelectItem>
              <SelectItem value="low_center">{t('modules.character-creator.components.forms.CompositionForm.characterPosition.options.low_center')}</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.CompositionForm.characterPosition.description')}
          </p>
        </div>
        
        <div className="grid gap-2">
          <div className="flex justify-between">
            <Label htmlFor="margin">{t('modules.character-creator.components.forms.CompositionForm.margin.label')}</Label>
            <span className="text-sm">{config.margin} {t('modules.character-creator.components.forms.CompositionForm.margin.unit')}</span>
          </div>
          <Slider
            id="margin"
            defaultValue={[config.margin]}
            max={2}
            min={0.25}
            step={0.25}
            onValueChange={handleMarginChange}
          />
          <p className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.CompositionForm.margin.description')}
          </p>
        </div>
      </div>
    </div>
  )
}
