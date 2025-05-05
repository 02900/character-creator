"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CharacterConfig, EffectsConfig } from "@/lib/types";
import { useRacesClasses } from "../../data/useRacesClasses";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface RaceClassFormProps {
  config: CharacterConfig;
  updateConfig: (config: CharacterConfig) => void;
  effectsConfig?: EffectsConfig;
  updateEffectsConfig?: (config: EffectsConfig) => void;
}

export function RaceClassForm({
  config,
  updateConfig,
  effectsConfig = {},
  updateEffectsConfig,
}: RaceClassFormProps) {
  const { t } = useI18n();
  const { races, classes } = useRacesClasses();
  const [selectedRace, setSelectedRace] = useState(config.race || "");
  const [selectedClass, setSelectedClass] = useState(config.class || "");
  const [raceDescription, setRaceDescription] = useState("");
  const [classDescription, setClassDescription] = useState("");

  useEffect(() => {
    if (selectedRace) {
      const race = races.find((r) => r.id === selectedRace);
      setRaceDescription(race ? race.description : "");
    } else {
      setRaceDescription("");
    }
  }, [selectedRace, races]);

  useEffect(() => {
    if (selectedClass) {
      const classObj = classes.find((c) => c.id === selectedClass);
      setClassDescription(classObj ? classObj.description : "");
    } else {
      setClassDescription("");
    }
  }, [selectedClass, classes]);

  const handleRaceChange = (value: string) => {
    setSelectedRace(value);
    updateConfig({
      ...config,
      race: value,
    });
  };

  const handleClassChange = (value: string) => {
    setSelectedClass(value);
    updateConfig({
      ...config,
      class: value,
    });
  };

  // Race effect handlers
  const handleToggleRaceEffect = (
    property: keyof NonNullable<EffectsConfig["raceEffects"]>,
    value: boolean | string
  ) => {
    if (!updateEffectsConfig) return;

    updateEffectsConfig({
      ...effectsConfig,
      raceEffects: {
        ...(effectsConfig.raceEffects || {}),
        [property]: value,
      },
    });
  };

  // Class effect handlers
  const handleToggleClassEffect = (
    property: keyof NonNullable<EffectsConfig["classEffects"]>,
    value: boolean | string | string[]
  ) => {
    if (!updateEffectsConfig) return;

    updateEffectsConfig({
      ...effectsConfig,
      classEffects: {
        ...(effectsConfig.classEffects || {}),
        [property]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          {t("modules.character-creator.components.forms.RaceClassForm.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t(
            "modules.character-creator.components.forms.RaceClassForm.description"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="race">
              {t(
                "modules.character-creator.components.forms.RaceClassForm.race"
              )}
            </Label>
            <Select value={selectedRace} onValueChange={handleRaceChange}>
              <SelectTrigger id="race">
                <SelectValue
                  placeholder={t(
                    "modules.character-creator.components.forms.RaceClassForm.raceSelectPlaceholder"
                  )}
                />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {races.map((race) => (
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
            <Label htmlFor="class">
              {t(
                "modules.character-creator.components.forms.RaceClassForm.class"
              )}
            </Label>
            <Select value={selectedClass} onValueChange={handleClassChange}>
              <SelectTrigger id="class">
                <SelectValue
                  placeholder={t(
                    "modules.character-creator.components.forms.RaceClassForm.classSelectPlaceholder"
                  )}
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
      </div>

      <Separator />

      <div>
        {selectedRace && selectedClass && (
          <div className="rounded-md bg-muted p-4">
            <p className="font-medium">
              {t(
                "modules.character-creator.components.forms.RaceClassForm.combination.title"
              )}
            </p>
            <p className="text-sm mt-1">
              {t(
                "modules.character-creator.components.forms.RaceClassForm.combination.description",
                {
                  race:
                    races.find((r) => r.id === selectedRace)?.name ||
                    selectedRace,
                  class:
                    classes.find((c) => c.id === selectedClass)?.name ||
                    selectedClass,
                }
              )}
            </p>
            <p className="text-sm mt-2">
              {t(
                "modules.character-creator.components.forms.RaceClassForm.combination.effect"
              )}
            </p>
          </div>
        )}
      </div>

      <Separator className="my-8" />

      {/* RACE EFFECTS SECTION */}
      <div className="space-y-6">
        <div>
          <h4 className="text-md font-medium mb-3">
            {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.title")}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.description")}
            {" "}{races.find((r) => r.id === selectedRace)?.name || ""}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <RadioGroup
                className="grid grid-cols-2 gap-2"
                value={effectsConfig.raceEffects?.elementalAffinity || "none"}
                onValueChange={(value) =>
                  handleToggleRaceEffect("elementalAffinity", value)
                }
              >
                <Label className="col-span-2 font-semibold mb-1">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.label")}
                </Label>
                {[
                  { value: "fire", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.fire") },
                  { value: "water", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.water") },
                  { value: "earth", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.earth") },
                  { value: "air", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.air") },
                  { value: "light", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.light") },
                  { value: "darkness", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.darkness") },
                  { value: "none", label: t("modules.character-creator.components.forms.RaceClassForm.raceEffects.elementalAffinity.types.none") },
                ].map((item) => (
                  <div key={item.value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item.value}
                      id={`element-${item.value}`}
                    />
                    <Label htmlFor={`element-${item.value}`}>
                      {item.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="glow">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.glow.label")}
                </Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.glow.description")}
                </div>
              </div>
              <Switch
                id="glow"
                checked={effectsConfig.raceEffects?.glow || false}
                onCheckedChange={(checked) =>
                  handleToggleRaceEffect("glow", checked)
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aura-type">
                {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.label")}
              </Label>
              <Select
                value={effectsConfig.raceEffects?.aura || "none"}
                onValueChange={(value) => handleToggleRaceEffect("aura", value)}
              >
                <SelectTrigger id="aura-type">
                  <SelectValue placeholder={t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.none")}</SelectItem>
                  <SelectItem value="divine">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.divine")}</SelectItem>
                  <SelectItem value="demonic">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.demonic")}</SelectItem>
                  <SelectItem value="nature">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.nature")}</SelectItem>
                  <SelectItem value="arcane">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.arcane")}</SelectItem>
                  <SelectItem value="elemental">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.aura.types.elemental")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="wings">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.wings.label")}</Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.wings.description")}
                </div>
              </div>
              <Switch
                id="wings"
                checked={effectsConfig.raceEffects?.wings || false}
                onCheckedChange={(checked) =>
                  handleToggleRaceEffect("wings", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="horns">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.horns.label")}</Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.horns.description")}
                </div>
              </div>
              <Switch
                id="horns"
                checked={effectsConfig.raceEffects?.horns || false}
                onCheckedChange={(checked) =>
                  handleToggleRaceEffect("horns", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="tail">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.tail.label")}</Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.tail.description")}
                </div>
              </div>
              <Switch
                id="tail"
                checked={effectsConfig.raceEffects?.tail || false}
                onCheckedChange={(checked) =>
                  handleToggleRaceEffect("tail", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="scales">{t("modules.character-creator.components.forms.RaceClassForm.raceEffects.scales.label")}</Label>
                <div className="text-xs text-muted-foreground">
                  {t("modules.character-creator.components.forms.RaceClassForm.raceEffects.scales.description")}
                </div>
              </div>
              <Switch
                id="scales"
                checked={effectsConfig.raceEffects?.scales || false}
                onCheckedChange={(checked) =>
                  handleToggleRaceEffect("scales", checked)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* CLASS EFFECTS SECTION */}
      <div className="space-y-6">
        <div>
          <h4 className="text-md font-medium mb-3">
            {t("modules.character-creator.components.forms.RaceClassForm.classEffects.title")}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {t("modules.character-creator.components.forms.RaceClassForm.classEffects.description")}
            {" "}{classes.find((c) => c.id === selectedClass)?.name || ""}
          </p>
        </div>

        <div className="space-y-4">
          <div className="mb-4">
            <Label className="mb-2 block">
              {classes.find((c) => c.id === selectedClass)?.name || ""} - 
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.label")}
            </Label>
            <RadioGroup
              className="grid grid-cols-2 gap-2 p-4 border rounded-md"
              value={effectsConfig.classEffects?.weapons || "normal"}
              onValueChange={(value) =>
                handleToggleClassEffect("weapons", value)
              }
            >
              {[
                { value: "normal", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.normal") },
                { value: "glowing", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.glowing") },
                { value: "runic", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.runic") },
                { value: "elemental", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.elemental") },
                { value: "spectral", label: t("modules.character-creator.components.forms.RaceClassForm.classEffects.weapons.types.spectral") },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.value}
                    id={`weapon-${item.value}`}
                  />
                  <Label htmlFor={`weapon-${item.value}`}>{item.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="spellbook">
                {t("modules.character-creator.components.forms.RaceClassForm.classEffects.spellbook.label")}
              </Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.classEffects.spellbook.description")}
              </div>
            </div>
            <Switch
              id="spellbook"
              checked={effectsConfig.classEffects?.spellbook || false}
              onCheckedChange={(checked) =>
                handleToggleClassEffect("spellbook", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="familiar">
                {t("modules.character-creator.components.forms.RaceClassForm.classEffects.familiar.label")}
              </Label>
              <div className="text-xs text-muted-foreground">
                {t("modules.character-creator.components.forms.RaceClassForm.classEffects.familiar.description")}
              </div>
            </div>
            <Switch
              id="familiar"
              checked={effectsConfig.classEffects?.familiar || false}
              onCheckedChange={(checked) =>
                handleToggleClassEffect("familiar", checked)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialAbility">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.specialAbility.label")}
            </Label>
            <div className="flex space-x-2">
              <Input
                id="specialAbility"
                placeholder={t("modules.character-creator.components.forms.RaceClassForm.classEffects.specialAbility.placeholder")}
                value={effectsConfig.classEffects?.specialAbility || ""}
                onChange={(e) =>
                  handleToggleClassEffect("specialAbility", e.target.value)
                }
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.specialAbility.description")}
            </p>
          </div>

          <div className="space-y-2">
            <Label className="mb-2 block">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.label")}
            </Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {(effectsConfig.classEffects?.equipment || []).map(
                (item, index) => (
                  <Badge key={index} variant="secondary" className="py-1">
                    {item}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-1 p-0"
                      onClick={() => {
                        const newEquipment = [
                          ...(effectsConfig.classEffects?.equipment || []),
                        ];
                        newEquipment.splice(index, 1);
                        handleToggleClassEffect("equipment", newEquipment);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              )}
            </div>
            <div className="flex space-x-2">
              <Input
                id="newEquipment"
                placeholder={t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.placeholder")}
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value.trim()) {
                    const newEquipment = [
                      ...(effectsConfig.classEffects?.equipment || []),
                      e.currentTarget.value.trim(),
                    ];
                    handleToggleClassEffect("equipment", newEquipment);
                    e.currentTarget.value = "";
                  }
                }}
              />
              <Button
                type="button"
                onClick={() => {
                  const input = document.getElementById(
                    "newEquipment"
                  ) as HTMLInputElement;
                  if (input.value.trim()) {
                    const newEquipment = [
                      ...(effectsConfig.classEffects?.equipment || []),
                      input.value.trim(),
                    ];
                    handleToggleClassEffect("equipment", newEquipment);
                    input.value = "";
                  }
                }}
              >
                {t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.buttonText")}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("modules.character-creator.components.forms.RaceClassForm.classEffects.equipment.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
