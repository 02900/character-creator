"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CharacterConfig } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { useClothingTypes } from "@/modules/character-creator/data/useClothingTypes"
import { useCharacterExpressions } from "@/modules/character-creator/data/useCharacterExpressions"
import { useClothingPatterns } from "@/modules/character-creator/data/useClothingPatterns"
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
import { Slider } from "@/components/ui/slider"

interface CharacterFormProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
}

export function CharacterForm({ config, updateConfig }: CharacterFormProps) {
  const { t } = useI18n();
  const { clothingTypes } = useClothingTypes();
  const { expressions } = useCharacterExpressions();
  const { patterns: predefinedPatterns } = useClothingPatterns();
  const [newPattern, setNewPattern] = useState("")


  const handleExpressionChange = (value: string) => {
    updateConfig({
      ...config,
      expression: value
    })
  }

  const handlePoseChange = (value: string) => {
    updateConfig({
      ...config,
      pose: value as 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle'
    })
  }
  
  const handleLevelChange = (value: number[]) => {
    updateConfig({
      ...config,
      level: value[0]
    })
  }

  const handleRightHandChange = (value: string) => {
    updateConfig({
      ...config,
      hands: {
        ...config.hands,
        right: value as 'none' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'fist' | 'pointing' | 'weapon_grip' | 'magic_circle'
      }
    })
  }

  const handleLeftHandChange = (value: string) => {
    updateConfig({
      ...config,
      hands: {
        ...config.hands,
        left: value as 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting'
      }
    })
  }

  const handleClothingTypeChange = (value: string) => {
    updateConfig({
      ...config,
      clothing: {
        ...config.clothing,
        type: value
      }
    })
  }

  const handleClothingFlowChange = (value: string) => {
    updateConfig({
      ...config,
      clothing: {
        ...config.clothing,
        flow: value as 'none' | 'dynamic' | 'still'
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
        
        <div className="grid gap-2 mb-4">
          <div className="flex justify-between">
            <Label htmlFor="character-level">{t('modules.character-creator.components.forms.CharacterForm.level.label')}</Label>
            <span className="text-sm font-medium">{t('modules.character-creator.components.forms.CharacterForm.level.value', { level: String(config.level || 50) })}</span>
          </div>
          <Slider
            id="character-level"
            defaultValue={[config.level || 50]}
            min={1}
            max={100}
            step={1}
            onValueChange={handleLevelChange}
          />
          <p className="text-xs text-muted-foreground">
            {t('modules.character-creator.components.forms.CharacterForm.level.description')}
          </p>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="expression">{t('modules.character-creator.components.forms.CharacterForm.expression.label')}</Label>
          <Select 
            value={config.expression} 
            onValueChange={handleExpressionChange}
          >
            <SelectTrigger id="expression">
              <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.expression.placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {expressions.map((expression) => (
                <SelectItem key={expression.id} value={expression.id}>
                  {expression.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
              <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.poseSelect')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="frontal">{t('modules.character-creator.components.forms.CharacterForm.poses.frontal')}</SelectItem>
              <SelectItem value="three_quarter">{t('modules.character-creator.components.forms.CharacterForm.poses.three_quarter')}</SelectItem>
              <SelectItem value="side">{t('modules.character-creator.components.forms.CharacterForm.poses.side')}</SelectItem>
              <SelectItem value="low_angle">{t('modules.character-creator.components.forms.CharacterForm.poses.low_angle')}</SelectItem>
              <SelectItem value="high_angle">{t('modules.character-creator.components.forms.CharacterForm.poses.high_angle')}</SelectItem>
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
                  <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.handPositionSelect')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.none')}</SelectItem>
                  <SelectItem value="clawed_upward">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.clawed_upward')}</SelectItem>
                  <SelectItem value="open_palm">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.open_palm')}</SelectItem>
                  <SelectItem value="two_fingers_cast">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.two_fingers_cast')}</SelectItem>
                  <SelectItem value="fist">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.fist')}</SelectItem>
                  <SelectItem value="pointing">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.pointing')}</SelectItem>
                  <SelectItem value="weapon_grip">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.weapon_grip')}</SelectItem>
                  <SelectItem value="magic_circle">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.magic_circle')}</SelectItem>
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
                  <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.handPositionSelect')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.none')}</SelectItem>
                  <SelectItem value="open_loose">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.open_loose')}</SelectItem>
                  <SelectItem value="spirit_guiding">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.spirit_guiding')}</SelectItem>
                  <SelectItem value="half_fist">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.half_fist')}</SelectItem>
                  <SelectItem value="shield_hold">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.shield_hold')}</SelectItem>
                  <SelectItem value="clenched_fist">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.clenched_fist')}</SelectItem>
                  <SelectItem value="holding_orb">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.holding_orb')}</SelectItem>
                  <SelectItem value="spell_casting">{t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.spell_casting')}</SelectItem>
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
              <Select 
                value={config.clothing?.type || ""} 
                onValueChange={handleClothingTypeChange}
              >
                <SelectTrigger id="clothing-type">
                  <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.clothing.type.placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  {clothingTypes.map((clothingType) => (
                    <SelectItem key={clothingType.id} value={clothingType.id}>
                      {clothingType.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="clothing-flow">{t('modules.character-creator.components.forms.CharacterForm.clothing.flow')}</Label>
              <Select 
                value={config.clothing?.flow || "dynamic"} 
                onValueChange={handleClothingFlowChange}
              >
                <SelectTrigger id="clothing-flow">
                  <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.flowStyleSelect')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t('modules.character-creator.components.forms.CharacterForm.clothing.flowTypes.none')}</SelectItem>
                  <SelectItem value="dynamic">{t('modules.character-creator.components.forms.CharacterForm.clothing.flowTypes.dynamic')}</SelectItem>
                  <SelectItem value="still">{t('modules.character-creator.components.forms.CharacterForm.clothing.flowTypes.still')}</SelectItem>
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
                 <div className="space-y-4">
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
                
                <div className="space-y-2">
                  <Label>{t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.predefinedLabel')}</Label>
                  <div className="flex flex-wrap gap-2">
                    {predefinedPatterns.map((pattern) => (
                      <Badge 
                        key={pattern.id} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-accent"
                        onClick={() => {
                          const existingPatterns = config.clothing?.patterns || [];
                          if (!existingPatterns.includes(pattern.name)) {
                            updateConfig({
                              ...config,
                              clothing: {
                                ...config.clothing,
                                patterns: [...existingPatterns, pattern.name]
                              }
                            });
                          }
                        }}
                      >
                        {pattern.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
