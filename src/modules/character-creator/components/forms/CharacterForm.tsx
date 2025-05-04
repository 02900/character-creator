"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CharacterConfig } from "@/lib/types"
import { Button } from "@/components/ui/button"
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
        <h3 className="text-lg font-medium">Character Details</h3>
        <p className="text-sm text-muted-foreground">
          Configure the appearance and characteristics of your character
        </p>
      </div>
      
      <div className="space-y-4">
        
        <div className="grid gap-2">
          <Label htmlFor="expression">Character Expression</Label>
          <Input 
            id="expression" 
            placeholder="e.g. piercing hollow eyes under hood" 
            value={config.expression}
            onChange={handleExpressionChange}
          />
          <p className="text-xs text-muted-foreground">
            Describe the facial expression or notable facial features
          </p>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="pose">Character Pose</Label>
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
          <h4 className="text-md font-medium mb-3">Hand Positions</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="right-hand">Right Hand</Label>
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
              <Label htmlFor="left-hand">Left Hand</Label>
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
          <h4 className="text-md font-medium mb-3">Clothing</h4>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="clothing-type">Clothing Type</Label>
              <Input 
                id="clothing-type" 
                placeholder="e.g. tattered robe" 
                value={config.clothing?.type || ""}
                onChange={handleClothingTypeChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="clothing-flow">Clothing Flow</Label>
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
              <Label>Patterns</Label>
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
                  placeholder="Add a pattern" 
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
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
