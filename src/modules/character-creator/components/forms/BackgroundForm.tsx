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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useSceneryTypes } from "../../data/useSceneryTypes"

interface BackgroundFormProps {
  config?: BackgroundConfig
  updateConfig: (config: BackgroundConfig) => void
}

export function BackgroundForm({ config = {}, updateConfig }: BackgroundFormProps) {
  const { t } = useI18n();
  const { sceneryTypes } = useSceneryTypes();

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
  
  // Handle scenery selection
  const handleSceneryChange = (value: string) => {
    updateConfig({
      ...config,
      scenery: value as 'forest' | 'castle' | 'mountain' | 'desert' | 'cave' | 'village' | 'temple' | 'beach' | 'dungeon' | 'city' | 'none'
    })
  }
  
  // Environment effects handlers
  const handleToggleWeatherEffect = (value: string) => {
    updateConfig({
      ...config,
      weatherEffect: value as 'clear' | 'rain' | 'storm' | 'snow' | 'fog'
    })
  }
  
  const handleToggleTimeOfDay = (value: string) => {
    updateConfig({
      ...config,
      timeOfDay: value as 'dawn' | 'day' | 'dusk' | 'night'
    })
  }
  
  const handleToggleParticles = (value: string) => {
    updateConfig({
      ...config,
      particles: value as 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks'
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
      
      <div className="space-y-6">
        {/* Scenery Selection */}
        <div className="mb-6 space-y-2">
          <Label>{t('modules.character-creator.components.forms.BackgroundForm.scenery.label')}</Label>
          <div className="text-xs text-muted-foreground mb-2">
            {t('modules.character-creator.components.forms.BackgroundForm.scenery.description')}
          </div>
          <Select
            value={config.scenery || "none"}
            onValueChange={handleSceneryChange}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('modules.character-creator.components.forms.BackgroundForm.scenery.placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {sceneryTypes.map((scenery) => (
                <SelectItem key={scenery.id} value={scenery.id}>
                  {scenery.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Sky Effects */}
        <div className="space-y-4">
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

      <Separator className="my-8" />
      
      <div>
        <h4 className="text-md font-medium mb-3">{t('modules.character-creator.components.forms.BackgroundForm.environment.title')}</h4>
        <div className="space-y-6">
          <div className="mb-4">
            <Label className="mb-2 block">{t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.label')}</Label>
            <RadioGroup 
              className="grid grid-cols-2 gap-2 p-4 border rounded-md" 
              value={config.weatherEffect || "clear"}
              onValueChange={handleToggleWeatherEffect}
            >
              {[
                { value: "clear", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.clear') },
                { value: "rain", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.rain') },
                { value: "storm", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.storm') },
                { value: "snow", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.snow') },
                { value: "fog", label: t('modules.character-creator.components.forms.BackgroundForm.environment.weatherEffect.types.fog') },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={`weather-${item.value}`} />
                  <Label htmlFor={`weather-${item.value}`}>{item.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">{t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.label')}</Label>
            <Card className="p-4 bg-muted/50">
              <CardContent className="p-0">
                <RadioGroup 
                  className="grid grid-cols-2 gap-2" 
                  value={config.timeOfDay || "day"}
                  onValueChange={handleToggleTimeOfDay}
                >
                  {[
                    { value: "dawn", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.dawn') },
                    { value: "day", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.day') },
                    { value: "dusk", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.dusk') },
                    { value: "night", label: t('modules.character-creator.components.forms.BackgroundForm.environment.timeOfDay.types.night') },
                  ].map((item) => (
                    <div key={item.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.value} id={`time-${item.value}`} />
                      <Label htmlFor={`time-${item.value}`}>{item.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.label')}</Label>
            <Select
              value={config.particles || "none"}
              onValueChange={handleToggleParticles}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('modules.character-creator.components.forms.BackgroundForm.environment.particles.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.none')}</SelectItem>
                <SelectItem value="dust">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.dust')}</SelectItem>
                <SelectItem value="leaves">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.leaves')}</SelectItem>
                <SelectItem value="embers">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.embers')}</SelectItem>
                <SelectItem value="snowflakes">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.snowflakes')}</SelectItem>
                <SelectItem value="sparks">{t('modules.character-creator.components.forms.BackgroundForm.environment.particles.types.sparks')}</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              {t('modules.character-creator.components.forms.BackgroundForm.environment.particles.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
