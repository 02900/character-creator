"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { BackgroundConfig } from "@/lib/types"
import { useI18n } from "@/lib/i18n"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select"

interface BackgroundFormProps {
  config?: BackgroundConfig
  updateConfig: (config: BackgroundConfig) => void
}

export function BackgroundForm({ config = {}, updateConfig }: BackgroundFormProps) {
  const { t } = useI18n();
  const handleSkyChange = (value: string) => {
    updateConfig({
      ...config,
      sky: value as 'stormy' | 'clear' | 'twilight'
    })
  }

  const handleToggleClouds = (checked: boolean) => {
    updateConfig({
      ...config,
      clouds: checked
    })
  }

  const handleToggleLightning = (checked: boolean) => {
    updateConfig({
      ...config,
      lightning: checked
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.BackgroundForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.BackgroundForm.description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="sky">{t('modules.character-creator.components.forms.BackgroundForm.sky.label')}</Label>
          <Select 
            value={config.sky || 'stormy'} 
            onValueChange={handleSkyChange}
          >
            <SelectTrigger id="sky">
              <SelectValue placeholder={t('modules.character-creator.components.forms.BackgroundForm.skySelect')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stormy">{t('modules.character-creator.components.forms.BackgroundForm.sky.types.stormy')}</SelectItem>
              <SelectItem value="clear">{t('modules.character-creator.components.forms.BackgroundForm.sky.types.clear')}</SelectItem>
              <SelectItem value="twilight">{t('modules.character-creator.components.forms.BackgroundForm.sky.types.twilight')}</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.BackgroundForm.sky.description')}
          </p>
        </div>
        
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="clouds">{t('modules.character-creator.components.forms.BackgroundForm.clouds.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.BackgroundForm.clouds.description')}
            </div>
          </div>
          <Switch
            id="clouds"
            checked={config.clouds || false}
            onCheckedChange={handleToggleClouds}
          />
        </div>
        
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="lightning">{t('modules.character-creator.components.forms.BackgroundForm.lightning.label')}</Label>
            <div className="text-xs text-muted-foreground">
              {t('modules.character-creator.components.forms.BackgroundForm.lightning.description')}
            </div>
          </div>
          <Switch
            id="lightning"
            checked={config.lightning || false}
            onCheckedChange={handleToggleLightning}
          />
        </div>
      </div>
    </div>
  )
}
