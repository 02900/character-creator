"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CharacterConfig } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface CharacterFormProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
}

export function CharacterForm({ config, updateConfig }: CharacterFormProps) {
  const { t } = useI18n();
  const [newPattern, setNewPattern] = useState("")


  const handleExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({
      ...config,
      expression: e.target.value
    })
  }

  const handlePoseChange = (value: string) => {
    updateConfig({
      ...config,
      pose: value as 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle'
    })
  }

  const handleRightHandChange = (value: string) => {
    updateConfig({
      ...config,
      hands: {
        ...config.hands,
        right: value as 'clawed_upward' | 'open_palm' | 'two_fingers_cast'
      }
    })
  }

  const handleLeftHandChange = (value: string) => {
    updateConfig({
      ...config,
      hands: {
        ...config.hands,
        left: value as 'open_loose' | 'spirit_guiding' | 'half_fist'
      }
    })
  }

  const handleClothingTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({
      ...config,
      clothing: {
        ...config.clothing,
        type: e.target.value
      }
    })
  }

  const handleClothingFlowChange = (value: string) => {
    updateConfig({
      ...config,
      clothing: {
        ...config.clothing,
        flow: value as 'dynamic' | 'still'
      }
    })
  }

  const addPattern = () => {
    if (newPattern.trim() !== "") {
      const patterns = config.clothing?.patterns || []
      updateConfig({
        ...config,
        clothing: {
          ...config.clothing,
          patterns: [...patterns, newPattern.trim()]
        }
      })
      setNewPattern("")
    }
  }

  const removePattern = (index: number) => {
    const patterns = config.clothing?.patterns || []
    const updatedPatterns = [...patterns]
    updatedPatterns.splice(index, 1)
    
    updateConfig({
      ...config,
      clothing: {
        ...config.clothing,
        patterns: updatedPatterns
      }
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.CharacterForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.CharacterForm.description')}
        </p>
      </div>
      
      <div className="space-y-4">
        
        <div className="grid gap-2">
          <Label htmlFor="expression">{t('modules.character-creator.components.forms.CharacterForm.expression.label')}</Label>
          <Input 
            id="expression" 
            placeholder={t('modules.character-creator.components.forms.CharacterForm.expression.placeholder')} 
            value={config.expression}
            onChange={handleExpressionChange}
          />
          <p className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.CharacterForm.expression.description')}
          </p>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="pose">{t('modules.character-creator.components.forms.CharacterForm.pose')}</Label>
          <Select 
            value={config.pose} 
            onValueChange={handlePoseChange}
          >
            <SelectTrigger id="pose">
              <SelectValue placeholder="Select a pose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="frontal">Frontal</SelectItem>
              <SelectItem value="three_quarter">Three Quarter</SelectItem>
              <SelectItem value="side">Side</SelectItem>
              <SelectItem value="low_angle">Low Angle</SelectItem>
              <SelectItem value="high_angle">High Angle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="text-md font-medium mb-2">{t('modules.character-creator.components.forms.CharacterForm.hands.title')}</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="right-hand">{t('modules.character-creator.components.forms.CharacterForm.hands.right')}</Label>
              <Select 
                value={config.hands.right} 
                onValueChange={handleRightHandChange}
              >
                <SelectTrigger id="right-hand">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clawed_upward">Clawed Upward</SelectItem>
                  <SelectItem value="open_palm">Open Palm</SelectItem>
                  <SelectItem value="two_fingers_cast">Two Fingers Cast</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="left-hand">{t('modules.character-creator.components.forms.CharacterForm.hands.left')}</Label>
              <Select 
                value={config.hands.left} 
                onValueChange={handleLeftHandChange}
              >
                <SelectTrigger id="left-hand">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open_loose">Open Loose</SelectItem>
                  <SelectItem value="spirit_guiding">Spirit Guiding</SelectItem>
                  <SelectItem value="half_fist">Half Fist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="text-md font-medium mb-3">{t('modules.character-creator.components.forms.CharacterForm.clothing.title')}</h4>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="clothing-type">{t('modules.character-creator.components.forms.CharacterForm.clothing.type.label')}</Label>
              <Input 
                id="clothing-type" 
                placeholder={t('modules.character-creator.components.forms.CharacterForm.clothing.type.placeholder')} 
                value={config.clothing?.type || ""}
                onChange={handleClothingTypeChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="clothing-flow">{t('modules.character-creator.components.forms.CharacterForm.clothing.flow')}</Label>
              <Select 
                value={config.clothing?.flow || "dynamic"} 
                onValueChange={handleClothingFlowChange}
              >
                <SelectTrigger id="clothing-flow">
                  <SelectValue placeholder="Select flow style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dynamic">Dynamic</SelectItem>
                  <SelectItem value="still">Still</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>{t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.label')}</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {(config.clothing?.patterns || []).map((pattern, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {pattern}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0"
                      onClick={() => removePattern(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder={t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.placeholder')} 
                  value={newPattern}
                  onChange={(e) => setNewPattern(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addPattern()
                    }
                  }}
                />
                <Button onClick={addPattern} size="sm" type="button">
                  {t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.addButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
