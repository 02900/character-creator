"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CompositionConfig } from "@/lib/types";
import { useI18n } from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CompositionFormProps {
  config: CompositionConfig;
  updateConfig: (config: Partial<CompositionConfig>) => void;
}

export function CompositionForm({
  config,
  updateConfig,
}: CompositionFormProps) {
  const { t } = useI18n();
  const handleSizeRatioChange = (value: string) => {
    updateConfig({
      ...config,
      characterSizeRatio: value as "60%" | "70%" | "80%",
    });
  };

  const handlePositionChange = (value: string) => {
    updateConfig({
      ...config,
      characterPosition: value as
        | "centered"
        | "slightly_above_center"
        | "low_center",
    });
  };

  const handleMarginChange = (value: number[]) => {
    updateConfig({
      ...config,
      margin: value[0],
    });
  };

  const handleHeightChange = (value: number[]) => {
    updateConfig({
      ...config,
      characterHeight: value[0],
    });
  };

  // Convert meters to inches (1 meter = 39.3701 inches)
  const metersToInches = (meters: number): number => {
    return meters * 39.3701;
  };

  // Format inches to feet and inches
  const formatInches = (totalInches: number): string => {
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          {t(
            "modules.character-creator.components.forms.CompositionForm.title"
          )}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t(
            "modules.character-creator.components.forms.CompositionForm.description"
          )}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="character-size">
            {t(
              "modules.character-creator.components.forms.CompositionForm.characterSize.label"
            )}
          </Label>
          <Select
            value={config.characterSizeRatio}
            onValueChange={handleSizeRatioChange}
          >
            <SelectTrigger id="character-size">
              <SelectValue
                placeholder={t(
                  "modules.character-creator.components.forms.CompositionForm.sizeRatioSelect"
                )}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="60%">
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterSize.options.60%"
                )}
              </SelectItem>
              <SelectItem value="70%">
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterSize.options.70%"
                )}
              </SelectItem>
              <SelectItem value="80%">
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterSize.options.80%"
                )}
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t(
              "modules.character-creator.components.forms.CompositionForm.characterSize.description"
            )}
          </p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="character-position">
            {t(
              "modules.character-creator.components.forms.CompositionForm.characterPosition.label"
            )}
          </Label>
          <Select
            value={config.characterPosition}
            onValueChange={handlePositionChange}
          >
            <SelectTrigger id="character-position">
              <SelectValue
                placeholder={t(
                  "modules.character-creator.components.forms.CompositionForm.positionSelect"
                )}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="centered">
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterPosition.options.centered"
                )}
              </SelectItem>
              <SelectItem value="slightly_above_center">
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterPosition.options.slightly_above_center"
                )}
              </SelectItem>
              <SelectItem value="low_center">
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterPosition.options.low_center"
                )}
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t(
              "modules.character-creator.components.forms.CompositionForm.characterPosition.description"
            )}
          </p>
        </div>

        <div className="grid gap-2">
          <div className="flex justify-between">
            <Label htmlFor="margin">
              {t(
                "modules.character-creator.components.forms.CompositionForm.margin.label"
              )}
            </Label>
            <span className="text-sm">
              {config.margin}{" "}
              {t(
                "modules.character-creator.components.forms.CompositionForm.margin.unit"
              )}
            </span>
          </div>
          <Slider
            id="margin"
            defaultValue={[config.margin]}
            max={2}
            min={0.25}
            step={0.25}
            onValueChange={handleMarginChange}
          />
          <p className="text-xs text-muted-foreground">
            {t(
              "modules.character-creator.components.forms.CompositionForm.margin.description"
            )}
          </p>
        </div>

        <div className="grid gap-2">
          <div className="flex justify-between">
            <Label htmlFor="character-height">
              {t(
                "modules.character-creator.components.forms.CompositionForm.characterHeight.label"
              )}
            </Label>
            <div className="text-sm space-x-2">
              <span>
                {config.characterHeight?.toFixed(2) ||
                  t(
                    "modules.character-creator.components.forms.CompositionForm.characterHeight.default"
                  )}{" "}
                {t(
                  "modules.character-creator.components.forms.CompositionForm.characterHeight.meters"
                )}
              </span>
              <span className="text-muted-foreground">
                ({formatInches(metersToInches(config.characterHeight || 1.7))})
              </span>
            </div>
          </div>
          <Slider
            id="character-height"
            defaultValue={[config.characterHeight || 1.7]}
            max={2.5}
            min={0.5}
            step={0.01}
            onValueChange={handleHeightChange}
          />
          <p className="text-xs text-muted-foreground">
            {t(
              "modules.character-creator.components.forms.CompositionForm.characterHeight.description"
            )}
          </p>
        </div>
      </div>

      <div className="grid gap-2">
        <div>
          <h3 className="text-lg font-medium">
            {t("modules.character-creator.components.forms.PageSizeForm.title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t(
              "modules.character-creator.components.forms.PageSizeForm.description"
            )}
          </p>
        </div>

        <RadioGroup
          value={config.pageSize}
          onValueChange={(value) =>
            updateConfig({ pageSize: value as "8.5x11" | "A4" | "Letter" })
          }
          className="grid grid-cols-3 gap-4"
        >
          <div>
            <RadioGroupItem
              value="8.5x11"
              id="8.5x11"
              className="peer sr-only"
            />
            <Label
              htmlFor="8.5x11"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span>
                {t(
                  "modules.character-creator.components.forms.PageSizeForm.sizes.85x11"
                )}
              </span>
            </Label>
          </div>

          <div>
            <RadioGroupItem value="A4" id="A4" className="peer sr-only" />
            <Label
              htmlFor="A4"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span>
                {t(
                  "modules.character-creator.components.forms.PageSizeForm.sizes.A4"
                )}
              </span>
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="Letter"
              id="Letter"
              className="peer sr-only"
            />
            <Label
              htmlFor="Letter"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span>
                {t(
                  "modules.character-creator.components.forms.PageSizeForm.sizes.Letter"
                )}
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
