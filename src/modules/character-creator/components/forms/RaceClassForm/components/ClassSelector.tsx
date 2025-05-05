"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useRacesClasses } from "@/modules/character-creator/hooks/useRacesClasses"
import { useRaceClassForm } from "../../../../hooks/useRaceClassForm"
import { useState } from "react"
import { useEffect } from "react"

export function ClassSelector() {
  const { t } = useI18n()
  const { classes } = useRacesClasses()
  const { config, updateConfig } = useRaceClassForm()
  const [classDescription, setClassDescription] = useState<string>("")
  
  const selectedClass = config.class
  
  const updateClass = (value: string) => {
    updateConfig({ class: value })
  }

  useEffect(() => {
    if (selectedClass) {
      const classObj = classes.find((c) => c.id === selectedClass)
      setClassDescription(classObj ? classObj.description : "")
    } else {
      setClassDescription("")
    }
  }, [selectedClass, classes])

  return (
    <div className="space-y-3">
      <div className="grid gap-2">
        <Label htmlFor="class">
          {t("modules.character-creator.components.forms.RaceClassForm.class")}
        </Label>
        <Select value={selectedClass} onValueChange={updateClass}>
          <SelectTrigger id="class">
            <SelectValue
              placeholder={t("modules.character-creator.components.forms.RaceClassForm.classSelectPlaceholder")}
            />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {classes.map((classObj) => (
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
  )
}
