"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"

export function HandsSection() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  
  // Helper functions to update hand poses
  const updateRightHand = (pose: string) => {
    updateConfig({
      hands: {
        ...config.hands,
        right: pose as 'none' | 'fist' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'pointing' | 'weapon_grip' | 'magic_circle'
      }
    })
  }
  
  const updateLeftHand = (pose: string) => {
    updateConfig({
      hands: {
        ...config.hands,
        left: pose as 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting'
      }
    })
  }

  return (
    <div>
      <h4 className="text-md font-medium mb-2">
        {t('modules.character-creator.components.forms.CharacterForm.hands.title')}
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="right-hand">
            {t('modules.character-creator.components.forms.CharacterForm.hands.right')}
          </Label>
          <Select 
            value={config.hands?.right} 
            onValueChange={updateRightHand}
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
          <Label htmlFor="left-hand">
            {t('modules.character-creator.components.forms.CharacterForm.hands.left')}
          </Label>
          <Select 
            value={config.hands?.left} 
            onValueChange={updateLeftHand}
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
  )
}
