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
import { races, classes } from "../../data/races-classes"
import { Separator } from "@/components/ui/separator"

interface RaceClassFormProps {
  config: CharacterConfig
  updateConfig: (config: CharacterConfig) => void
}

export function RaceClassForm({ config, updateConfig }: RaceClassFormProps) {
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
  }, [selectedRace])

  useEffect(() => {
    if (selectedClass) {
      const classObj = classes.find(c => c.id === selectedClass)
      setClassDescription(classObj ? classObj.description : "")
    } else {
      setClassDescription("")
    }
  }, [selectedClass])

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
        <h3 className="text-lg font-medium">Raza y Clase</h3>
        <p className="text-sm text-muted-foreground">
          Selecciona la raza y clase para tu personaje
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="race">Raza</Label>
            <Select 
              value={selectedRace} 
              onValueChange={handleRaceChange}
            >
              <SelectTrigger id="race">
                <SelectValue placeholder="Selecciona una raza" />
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
            <Label htmlFor="class">Clase</Label>
            <Select 
              value={selectedClass} 
              onValueChange={handleClassChange}
            >
              <SelectTrigger id="class">
                <SelectValue placeholder="Selecciona una clase" />
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
            <p className="font-medium">Combinación de Raza y Clase</p>
            <p className="text-sm mt-1">
              Has seleccionado {races.find(r => r.id === selectedRace)?.name} como raza y {classes.find(c => c.id === selectedClass)?.name} como clase.
            </p>
            <p className="text-sm mt-2">
              Esta combinación afectará las características y habilidades de tu personaje.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
