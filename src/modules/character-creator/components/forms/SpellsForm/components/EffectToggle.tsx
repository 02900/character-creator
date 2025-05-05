"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface EffectToggleProps {
  id: string
  label: string
  description: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function EffectToggle({ id, label, description, checked, onCheckedChange }: EffectToggleProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{label}</Label>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  )
}
