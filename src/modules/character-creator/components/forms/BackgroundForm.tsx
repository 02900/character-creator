"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { BackgroundConfig } from "@/lib/types"
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
        <h3 className="text-lg font-medium">Background</h3>
        <p className="text-sm text-muted-foreground">
          Configure the background elements for your character illustration
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="sky">Sky Type</Label>
          <Select 
            value={config.sky || 'stormy'} 
            onValueChange={handleSkyChange}
          >
            <SelectTrigger id="sky">
              <SelectValue placeholder="Select sky type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stormy">Stormy</SelectItem>
              <SelectItem value="clear">Clear</SelectItem>
              <SelectItem value="twilight">Twilight</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            The appearance of the sky in the background
          </p>
        </div>
        
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="clouds">Clouds</Label>
            <div className="text-xs text-muted-foreground">
              Add clouds to the background sky
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
            <Label htmlFor="lightning">Lightning</Label>
            <div className="text-xs text-muted-foreground">
              Add lightning effects to the background
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
