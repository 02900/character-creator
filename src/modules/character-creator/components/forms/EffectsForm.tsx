"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { EffectsConfig } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface EffectsFormProps {
  config?: EffectsConfig;
  updateConfig: (config: EffectsConfig) => void;
}

export function EffectsForm({ config = {}, updateConfig }: EffectsFormProps) {
  const handleMagicTypeChange = (value: string) => {
    updateConfig({
      ...config,
      magic: {
        ...(config.magic || { intensity: "strong" }),
        type: value as "spiral" | "orb" | "flame" | "aura",
      },
    });
  };

  const handleMagicIntensityChange = (value: string) => {
    updateConfig({
      ...config,
      magic: {
        ...(config.magic || { type: "spiral" }),
        intensity: value as "subtle" | "strong",
      },
    });
  };

  const handleToggleSpirits = (checked: boolean) => {
    updateConfig({
      ...config,
      spirits: checked,
    });
  };

  const handleToggleMist = (checked: boolean) => {
    updateConfig({
      ...config,
      mist: checked,
    });
  };

  const handleToggleGroundCracks = (checked: boolean) => {
    updateConfig({
      ...config,
      groundCracks: checked,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Effects</h3>
        <p className="text-sm text-muted-foreground">
          Configure special effects for your character illustration
        </p>
      </div>

      <div>
        <h4 className="text-md font-medium mb-3">Magic Effects</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="magic-type">Magic Type</Label>
            <Select
              value={config.magic?.type || "spiral"}
              onValueChange={handleMagicTypeChange}
            >
              <SelectTrigger id="magic-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spiral">Spiral</SelectItem>
                <SelectItem value="orb">Orb</SelectItem>
                <SelectItem value="flame">Flame</SelectItem>
                <SelectItem value="aura">Aura</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="magic-intensity">Intensity</Label>
            <Select
              value={config.magic?.intensity || "strong"}
              onValueChange={handleMagicIntensityChange}
            >
              <SelectTrigger id="magic-intensity">
                <SelectValue placeholder="Select intensity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subtle">Subtle</SelectItem>
                <SelectItem value="strong">Strong</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="spirits">Spirits</Label>
            <div className="text-xs text-muted-foreground">
              Add ethereal spirits around the character
            </div>
          </div>
          <Switch
            id="spirits"
            checked={config.spirits || false}
            onCheckedChange={handleToggleSpirits}
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="mist">Mist</Label>
            <div className="text-xs text-muted-foreground">
              Add mystical mist around the character's feet
            </div>
          </div>
          <Switch
            id="mist"
            checked={config.mist || false}
            onCheckedChange={handleToggleMist}
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="groundCracks">Ground Cracks</Label>
            <div className="text-xs text-muted-foreground">
              Add cracked ground beneath the character
            </div>
          </div>
          <Switch
            id="groundCracks"
            checked={config.groundCracks || false}
            onCheckedChange={handleToggleGroundCracks}
          />
        </div>
      </div>
    </div>
  );
}
