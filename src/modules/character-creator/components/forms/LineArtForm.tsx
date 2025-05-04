"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { LineArtConfig } from "@/lib/types"
import { useI18n } from "@/lib/i18n"

interface LineArtFormProps {
  config: LineArtConfig
  updateConfig: (config: LineArtConfig) => void
}

export function LineArtForm({ config, updateConfig }: LineArtFormProps) {
  const { t } = useI18n();
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.LineArtForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.LineArtForm.description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-md font-medium mb-2">{t('modules.character-creator.components.forms.LineArtForm.lineWeight')}</h4>
          <RadioGroup
            value={config.lineWeight}
            onValueChange={(value) => 
              updateConfig({ ...config, lineWeight: value as 'bold' | 'medium' | 'fine' })}
            className="grid grid-cols-3 gap-4"
          >
            <div>
              <RadioGroupItem value="bold" id="bold" className="peer sr-only" />
              <Label
                htmlFor="bold"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>Bold</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
              <Label
                htmlFor="medium"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>Medium</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="fine" id="fine" className="peer sr-only" />
              <Label
                htmlFor="fine"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>Fine</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="cleanLines">{t('modules.character-creator.components.forms.LineArtForm.cleanLines.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.LineArtForm.cleanLines.description')}
            </div>
          </div>
          <Switch
            id="cleanLines"
            checked={config.cleanLines}
            onCheckedChange={(checked) => 
              updateConfig({ ...config, cleanLines: checked })}
          />
        </div>
        
        <div className="flex items-center justify-between rounded-lg border p-4 bg-muted/50">
          <div className="space-y-0.5">
            <Label htmlFor="shading" className="text-muted-foreground">{t('modules.character-creator.components.forms.LineArtForm.shading.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.LineArtForm.shading.description')}
            </div>
          </div>
          <Switch
            id="shading"
            checked={false}
            disabled={true}
          />
        </div>
        
        <div className="flex items-center justify-between rounded-lg border p-4 bg-muted/50">
          <div className="space-y-0.5">
            <Label htmlFor="grayscale" className="text-muted-foreground">{t('modules.character-creator.components.forms.LineArtForm.grayscale.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.LineArtForm.grayscale.description')}
            </div>
          </div>
          <Switch
            id="grayscale"
            checked={false}
            disabled={true}
          />
        </div>
      </div>
    </div>
  )
}
