"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/lib/i18n"
import { X } from "lucide-react"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"
import { useClothingPatterns } from "../hooks/useClothingPatterns"

export function PatternsSelector() {
  const { t } = useI18n()
  const { patterns: predefinedPatterns } = useClothingPatterns()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper functions for pattern management
  const addPattern = (pattern: string) => {
    const currentPatterns = config.clothing?.patterns || []
    updateConfig({
      clothing: {
        ...config.clothing,
        patterns: [...currentPatterns, pattern]
      }
    })
  }
  
  const removePattern = (index: number) => {
    const currentPatterns = [...(config.clothing?.patterns || [])]
    currentPatterns.splice(index, 1)
    updateConfig({
      clothing: {
        ...config.clothing,
        patterns: currentPatterns
      }
    })
  }
  const [newPattern, setNewPattern] = useState("")

  const handleAddPattern = () => {
    if (newPattern.trim() !== "") {
      addPattern(newPattern)
      setNewPattern("")
    }
  }

  return (
    <div className="space-y-2">
      <Label>
        {t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.label')}
      </Label>
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
                handleAddPattern()
              }
            }}
          />
          <Button onClick={handleAddPattern} size="sm" type="button">
            {t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.addButton')}
          </Button>
        </div>
        
        <div className="space-y-2">
          <Label>
            {t('modules.character-creator.components.forms.CharacterForm.clothing.patterns.predefinedLabel')}
          </Label>
          <div className="flex flex-wrap gap-2">
            {predefinedPatterns.map((pattern) => (
              <Badge 
                key={pattern.id} 
                variant="outline" 
                className="cursor-pointer hover:bg-accent"
                onClick={() => {
                  const existingPatterns = config.clothing?.patterns || [];
                  if (!existingPatterns.includes(pattern.name)) {
                    addPattern(pattern.name)
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
  )
}
