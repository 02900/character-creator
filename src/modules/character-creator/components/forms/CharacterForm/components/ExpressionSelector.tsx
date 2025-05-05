"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterExpressions } from "@/modules/character-creator/data/useCharacterExpressions"
import { useCharacterFormStore } from "../store/useCharacterFormStore"

export function ExpressionSelector() {
  const { t } = useI18n()
  const { expressions } = useCharacterExpressions()
  const { config, updateExpression } = useCharacterFormStore()

  return (
    <div className="grid gap-2">
      <Label htmlFor="expression">
        {t('modules.character-creator.components.forms.CharacterForm.expression.label')}
      </Label>
      <Select 
        value={config.expression} 
        onValueChange={updateExpression}
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
  )
}
