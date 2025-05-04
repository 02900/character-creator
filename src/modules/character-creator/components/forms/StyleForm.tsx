"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ColoringBookIllustrationConfig } from "@/lib/types"

interface StyleFormProps {
  config: ColoringBookIllustrationConfig
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void
}

export function StyleForm({ config, updateConfig }: StyleFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Illustration Style</h3>
        <p className="text-sm text-muted-foreground">
          Choose the art style for your character
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
            <span>Anime</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="chibi" id="chibi" className="peer sr-only" />
          <Label
            htmlFor="chibi"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>Chibi</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="dark_fantasy" id="dark_fantasy" className="peer sr-only" />
          <Label
            htmlFor="dark_fantasy"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>Dark Fantasy</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="isekai" id="isekai" className="peer sr-only" />
          <Label
            htmlFor="isekai"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>Isekai</span>
          </Label>
        </div>
        
        <div>
          <RadioGroupItem value="manga" id="manga" className="peer sr-only" />
          <Label
            htmlFor="manga"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <span>Manga</span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
