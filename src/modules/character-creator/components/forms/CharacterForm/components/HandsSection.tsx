"use client"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n"
import { useCharacterForm } from "../../../../hooks/useCharacterForm"
import { useState } from "react"

// Define types for better type safety
type HandMode = 'separate' | 'weapon' | 'shield' | 'magic' | 'spell';
type RightHandPose = 'none' | 'fist' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'pointing' | 'weapon_grip' | 'magic_circle';
type LeftHandPose = 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting';

export function HandsSection() {
  const { t } = useI18n()
  const { config, updateConfig } = useCharacterForm()
  const [handMode, setHandMode] = useState<HandMode>('separate')
  
  // Helper functions to update hand poses
  const updateRightHand = (pose: string) => {
    updateConfig({
      hands: {
        ...config.hands,
        right: pose as RightHandPose
      }
    })
  }
  
  const updateLeftHand = (pose: string) => {
    updateConfig({
      hands: {
        ...config.hands,
        left: pose as LeftHandPose
      }
    })
  }
  
  // Set both hands based on the selected mode
  const updateHandMode = (mode: HandMode) => {
    setHandMode(mode)
    
    if (mode === 'separate') return; // No need to update poses when in separate mode
    
    // Define hand configurations for each mode
    const handConfigs = {
      weapon: { right: 'weapon_grip' as RightHandPose, left: 'shield_hold' as LeftHandPose },
      shield: { right: 'fist' as RightHandPose, left: 'shield_hold' as LeftHandPose },
      magic: { right: 'magic_circle' as RightHandPose, left: 'holding_orb' as LeftHandPose },
      spell: { right: 'two_fingers_cast' as RightHandPose, left: 'spell_casting' as LeftHandPose }
    }
    
    // Update both hands with the appropriate poses
    updateConfig({
      hands: {
        ...config.hands,
        ...handConfigs[mode]
      }
    })
  }

  return (
    <div>
      <h4 className="text-md font-medium mb-2">
        {t('modules.character-creator.components.forms.CharacterForm.hands.title')}
      </h4>
      
      <div className="space-y-4 mb-4">
        <div className="space-y-2">
          <Label htmlFor="hand-mode">
            {t('modules.character-creator.components.forms.CharacterForm.hands.mode', { fallback: 'Hand Coordination' })}
          </Label>
          <Select 
            value={handMode} 
            onValueChange={(value) => updateHandMode(value as HandMode)}
          >
            <SelectTrigger id="hand-mode">
              <SelectValue placeholder={t('modules.character-creator.components.forms.CharacterForm.hands.selectMode', { fallback: 'Select hand mode' })} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="separate">{t('modules.character-creator.components.forms.CharacterForm.hands.modes.separate', { fallback: 'Independent (control each hand separately)' })}</SelectItem>
              <SelectItem value="weapon">{t('modules.character-creator.components.forms.CharacterForm.hands.modes.weapon', { fallback: 'Two-handed weapon grip' })}</SelectItem>
              <SelectItem value="shield">{t('modules.character-creator.components.forms.CharacterForm.hands.modes.shield', { fallback: 'Hold shield with both hands' })}</SelectItem>
              <SelectItem value="magic">{t('modules.character-creator.components.forms.CharacterForm.hands.modes.magic', { fallback: 'Create magic circle' })}</SelectItem>
              <SelectItem value="spell">{t('modules.character-creator.components.forms.CharacterForm.hands.modes.spell', { fallback: 'Cast spell with both hands' })}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {handMode === 'separate' ? (
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
      ) : (
        <div className="space-y-2 border p-4 rounded-md bg-muted/20">
          <h5 className="font-medium text-sm">
            {handMode === 'weapon' && t('modules.character-creator.components.forms.CharacterForm.hands.currentMode.weapon', { fallback: 'Both hands gripping a weapon' })}
            {handMode === 'shield' && t('modules.character-creator.components.forms.CharacterForm.hands.currentMode.shield', { fallback: 'Both hands holding a shield' })}
            {handMode === 'magic' && t('modules.character-creator.components.forms.CharacterForm.hands.currentMode.magic', { fallback: 'Both hands creating a magic circle' })}
            {handMode === 'spell' && t('modules.character-creator.components.forms.CharacterForm.hands.currentMode.spell', { fallback: 'Both hands casting a spell' })}
          </h5>
          <div className="text-sm text-muted-foreground">
            <p>
              {t('modules.character-creator.components.forms.CharacterForm.hands.rightHand', { fallback: 'Right hand' })}: <span className="font-medium">
                {handMode === 'weapon' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.weapon_grip', { fallback: 'Weapon grip' })}
                {handMode === 'shield' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.fist', { fallback: 'Fist' })}
                {handMode === 'magic' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.magic_circle', { fallback: 'Magic circle' })}
                {handMode === 'spell' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.right.two_fingers_cast', { fallback: 'Two fingers cast' })}
              </span>
            </p>
            <p>
              {t('modules.character-creator.components.forms.CharacterForm.hands.leftHand', { fallback: 'Left hand' })}: <span className="font-medium">
                {handMode === 'weapon' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.shield_hold', { fallback: 'Shield hold' })}
                {handMode === 'shield' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.shield_hold', { fallback: 'Shield hold' })}
                {handMode === 'magic' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.holding_orb', { fallback: 'Holding orb' })}
                {handMode === 'spell' && t('modules.character-creator.components.forms.CharacterForm.hands.positions.left.spell_casting', { fallback: 'Spell casting' })}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
