"use client"

import { useState, useEffect } from "react"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { CharacterConfig } from "@/lib/types"
import { useRacesClasses } from "../../data/useRacesClasses"
import { Separator } from "@/components/ui/separator"
import { useI18n } from "@/lib/i18n"

interface RaceClassFormProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
}

export function RaceClassForm({ config, updateConfig }: RaceClassFormProps) {
  const { t } = useI18n();
  const { races, classes } = useRacesClasses();
  const [selectedRace, setSelectedRace] = useState(config.race || "")
  const [selectedClass, setSelectedClass] = useState(config.class || "")
  const [raceDescription, setRaceDescription] = useState("")
  const [classDescription, setClassDescription] = useState("")

  useEffect(() => {
    if (selectedRace) {
      const race = races.find(r => r.id === selectedRace)
      setRaceDescription(race ? race.description : "")
    } else {
      setRaceDescription("")
    }
  }, [selectedRace, races])

  useEffect(() => {
    if (selectedClass) {
      const classObj = classes.find(c => c.id === selectedClass)
      setClassDescription(classObj ? classObj.description : "")
    } else {
      setClassDescription("")
    }
  }, [selectedClass, classes])

  const handleRaceChange = (value: string) => {
    setSelectedRace(value)
    updateConfig({
      ...config,
      race: value
    })
  }

  const handleClassChange = (value: string) => {
    setSelectedClass(value)
    updateConfig({
      ...config,
      class: value
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.RaceClassForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.RaceClassForm.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="race">{t('modules.character-creator.components.forms.RaceClassForm.race')}</Label>
            <Select 
              value={selectedRace} 
              onValueChange={handleRaceChange}
            >
              <SelectTrigger id="race">
                <SelectValue placeholder={t('modules.character-creator.components.forms.RaceClassForm.raceSelectPlaceholder')} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {races.map(race => (
                  <SelectItem key={race.id} value={race.id}>
                    {race.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {raceDescription && (
            <Card>
              <CardContent className="pt-4 px-4 text-sm">
                {raceDescription}
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="class">{t('modules.character-creator.components.forms.RaceClassForm.class')}</Label>
            <Select 
              value={selectedClass} 
              onValueChange={handleClassChange}
            >
              <SelectTrigger id="class">
                <SelectValue placeholder={t('modules.character-creator.components.forms.RaceClassForm.classSelectPlaceholder')} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {classes.map(classObj => (
                  <SelectItem key={classObj.id} value={classObj.id}>
                    {classObj.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {classDescription && (
            <Card>
              <CardContent className="pt-4 px-4 text-sm">
                {classDescription}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Separator />
      
      <div>
        {selectedRace && selectedClass && (
          <div className="rounded-md bg-muted p-4">
            <p className="font-medium">{t('modules.character-creator.components.forms.RaceClassForm.combination.title')}</p>
            <p className="text-sm mt-1">
              {t('modules.character-creator.components.forms.RaceClassForm.combination.description', {
                race: races.find(r => r.id === selectedRace)?.name || selectedRace,
                class: classes.find(c => c.id === selectedClass)?.name || selectedClass
              })}
            </p>
            <p className="text-sm mt-2">
              {t('modules.character-creator.components.forms.RaceClassForm.combination.effect')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
