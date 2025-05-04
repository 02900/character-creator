"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CompositionConfig } from "@/lib/types"
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
        <h3 className="text-lg font-medium">Composition</h3>
        <p className="text-sm text-muted-foreground">
          Configure the layout and positioning of your character in the illustration
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="character-size">Character Size Ratio</Label>
          <Select 
            value={config.characterSizeRatio} 
            onValueChange={handleSizeRatioChange}
          >
            <SelectTrigger id="character-size">
              <SelectValue placeholder="Select size ratio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="60%">60%</SelectItem>
              <SelectItem value="70%">70%</SelectItem>
              <SelectItem value="80%">80%</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            The size of the character relative to the page
          </p>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="character-position">Character Position</Label>
          <Select 
            value={config.characterPosition} 
            onValueChange={handlePositionChange}
          >
            <SelectTrigger id="character-position">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="centered">Centered</SelectItem>
              <SelectItem value="slightly_above_center">Slightly Above Center</SelectItem>
              <SelectItem value="low_center">Low Center</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            The vertical positioning of the character
          </p>
        </div>
        
        <div className="grid gap-2">
          <div className="flex justify-between">
            <Label htmlFor="margin">Page Margin</Label>
            <span className="text-sm">{config.margin} inches</span>
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
            Space between the edge of the page and the illustration
          </p>
        </div>
      </div>
    </div>
  )
}
