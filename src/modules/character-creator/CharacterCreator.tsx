"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { CharacterPreview } from "./components/CharacterPreview";
import { PageSizeForm } from "./components/forms/PageSizeForm";
import { StyleForm } from "./components/forms/StyleForm";
import { LineArtForm } from "./components/forms/LineArtForm";
import { CharacterForm } from "./components/forms/CharacterForm";
import { RaceClassForm } from "./components/forms/RaceClassForm";
import { EffectsForm } from "./components/forms/EffectsForm";
import { BackgroundForm } from "./components/forms/BackgroundForm";
import { CompositionForm } from "./components/forms/CompositionForm";
import { WeaponsForm } from "./components/forms/WeaponsForm";
import { ColoringBookIllustrationConfig, defaultConfig } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";
import {
  exportCharacterInLanguage,
  downloadJson,
} from "./utils/characterExport";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Save, Users } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  generateDefaultName,
  characterNameExists,
  saveCharacter,
  getSavedCharacters,
} from "./utils/characterStorage";

export function CharacterCreator() {
  const searchParams = useSearchParams();
  const [config, setConfig] =
    useState<ColoringBookIllustrationConfig>(defaultConfig);
  const { t } = useI18n();
  const [characterName, setCharacterName] = useState<string>("");
  const [saveDialogOpen, setSaveDialogOpen] = useState<boolean>(false);
  const [nameExists, setNameExists] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const saveInputRef = useRef<HTMLInputElement>(null);

  // Load character from URL if provided
  useEffect(() => {
    const characterParam = searchParams.get("character");
    if (characterParam) {
      // Try to find character in saved characters
      const savedCharacters = getSavedCharacters();
      const foundCharacter = savedCharacters.find(
        (char) => char.name === characterParam
      );

      if (foundCharacter) {
        // Load character data
        setConfig(foundCharacter.config);
        setCharacterName(foundCharacter.name);
        setIsEditMode(true);
        toast.success(t("characters.loaded") || "Character loaded", {
          description:
            t("characters.loadedDescription") ||
            "The character has been loaded for editing",
        });
      }
    }
  }, [searchParams, t]);

  // Generate default name when race or class changes, but only if not in edit mode
  useEffect(() => {
    if (!isEditMode) {
      const defaultName = generateDefaultName(config);
      setCharacterName(defaultName);
    }
  }, [config, config.character.race, config.character.class, isEditMode]);

  // Focus the input when save dialog opens
  useEffect(() => {
    if (saveDialogOpen && saveInputRef.current) {
      setTimeout(() => saveInputRef.current?.focus(), 100);
    }
  }, [saveDialogOpen]);

  // Validate if name already exists
  const checkNameExists = (name: string) => {
    const exists = characterNameExists(name);
    setNameExists(exists);
    return exists;
  };

  const updateConfig = (
    partialConfig: Partial<ColoringBookIllustrationConfig>
  ) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      ...partialConfig,
    }));
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    toast("Reset configuration.", {
      description: "Character configuration has been reset to default values.",
    });
  };

  const exportConfig = () => {
    const configJson = JSON.stringify(config, null, 2);
    const blob = new Blob([configJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${characterName || "character"}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast(t("common.exportSuccess"), {
      description: t("common.exportDescription"),
    });
  };

  // Save character to localStorage
  const saveCharacterToStorage = (override: boolean = false) => {
    if (!characterName.trim()) {
      toast.error(t("common.nameRequired") || "Name is required", {
        description:
          t("common.nameRequiredDescription") ||
          "Please enter a name for your character",
      });
      return;
    }

    // Check if name exists and we're not overriding
    if (!override && checkNameExists(characterName)) {
      toast.error(t("common.nameExists") || "Name already exists", {
        description:
          t("common.nameExistsDescription") ||
          "A character with this name already exists",
      });
      return;
    }

    const result = saveCharacter(characterName, config, override);

    if (result) {
      toast.success(t("common.characterSaved") || "Character saved", {
        description: override
          ? t("common.characterUpdated") || "Character has been updated"
          : t("common.characterCreated") || "Character has been created",
      });
      setSaveDialogOpen(false);
    } else {
      toast.error(t("common.saveFailed") || "Save failed", {
        description:
          t("common.saveFailedDescription") ||
          "There was a problem saving your character",
      });
    }
  };

  // Export character data with language-specific translations
  const exportTranslatedConfig = (language: "en" | "es") => {
    try {
      // Get translated configuration data
      const translatedData = exportCharacterInLanguage(config, language);

      // Generate filename with language code
      const filename = `character-${language}.json`;

      // Download the translated configuration
      downloadJson(translatedData, filename);

      // Show success message with language name
      const languageName = language === "en" ? "English" : "Español";
      toast(t("common.exportSuccess"), {
        description: t("common.exportLanguageDescription", {
          language: languageName,
        }),
      });
    } catch (error) {
      console.error("Export failed:", error);
      toast.error(t("common.exportError"), {
        description: t("common.exportErrorDescription"),
      });
    }
  };

  return (
    <div className="flex md:flex-row gap-2">
      <div className="flex flex-col">
        <Tabs defaultValue="character" className="w-full">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="page">Page</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
            <TabsTrigger value="lineart">Line Art</TabsTrigger>
            <TabsTrigger value="raceclass">Race/Class</TabsTrigger>
            <TabsTrigger value="character">Character</TabsTrigger>
            <TabsTrigger value="weapons">Weapons</TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="composition">Composition</TabsTrigger>
          </TabsList>

          <Card className="mt-4 p-4">
            <TabsContent value="page" className="mt-0">
              <PageSizeForm config={config} updateConfig={updateConfig} />
            </TabsContent>

            <TabsContent value="style" className="mt-0">
              <StyleForm config={config} updateConfig={updateConfig} />
            </TabsContent>

            <TabsContent value="lineart" className="mt-0">
              <LineArtForm
                config={config.lineArt}
                updateConfig={(lineArt) => updateConfig({ lineArt })}
              />
            </TabsContent>

            <TabsContent value="raceclass" className="mt-0">
              <RaceClassForm
                config={config.character}
                updateConfig={(character) => updateConfig({ character })}
              />
            </TabsContent>

            <TabsContent value="character" className="mt-0">
              <CharacterForm
                config={config.character}
                updateConfig={(character) => updateConfig({ character })}
              />
            </TabsContent>

            <TabsContent value="weapons" className="mt-0">
              <WeaponsForm
                config={config.weapons}
                updateConfig={(weapons) => updateConfig({ weapons })}
              />
            </TabsContent>

            <TabsContent value="effects" className="mt-0">
              <EffectsForm
                config={config.effects}
                updateConfig={(effects) => updateConfig({ effects })}
              />
            </TabsContent>

            <TabsContent value="background" className="mt-0">
              <BackgroundForm
                config={config.background}
                updateConfig={(background) => updateConfig({ background })}
              />
            </TabsContent>

            <TabsContent value="composition" className="mt-0">
              <CompositionForm
                config={config.composition}
                updateConfig={(composition) => updateConfig({ composition })}
              />
            </TabsContent>
          </Card>
        </Tabs>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Button variant="outline" asChild>
            <Link href="/characters">
              <Users className="mr-2 h-4 w-4" />
              {t("common.characters.viewAll") || "View All Characters"}
            </Link>
          </Button>

          <Button variant="outline" onClick={resetConfig}>
            {t("common.reset") || "Reset"}
          </Button>

          <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                {t("common.saveCharacter") || "Save Character"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {t("common.saveCharacter") || "Save Character"}
                </DialogTitle>
                <DialogDescription>
                  {t("common.saveCharacterDescription") ||
                    "Enter a name for your character"}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="character-name">
                    {t("common.characterName") || "Character Name"}
                  </Label>
                  <Input
                    id="character-name"
                    ref={saveInputRef}
                    value={characterName}
                    onChange={(e) => {
                      setCharacterName(e.target.value);
                      if (nameExists) checkNameExists(e.target.value);
                    }}
                    onBlur={() => checkNameExists(characterName)}
                    className={nameExists ? "border-red-500" : ""}
                  />
                  {nameExists && (
                    <p className="text-sm text-red-500">
                      {t("common.nameExistsWarning") ||
                        "A character with this name already exists"}
                    </p>
                  )}
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">
                    {t("common.cancel") || "Cancel"}
                  </Button>
                </DialogClose>
                {nameExists ? (
                  <Button onClick={() => saveCharacterToStorage(true)}>
                    {t("common.overwrite") || "Overwrite"}
                  </Button>
                ) : (
                  <Button onClick={() => saveCharacterToStorage(false)}>
                    {t("common.save") || "Save"}
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button onClick={exportConfig}>
            {t("common.exportConfig") || "Export Configuration"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Languages className="mr-2 h-4 w-4" />
                {t("common.exportTranslated") || "Export Translated"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => exportTranslatedConfig("en")}>
                {(t("common.exportIn") || "Export in") + " English"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportTranslatedConfig("es")}>
                {(t("common.exportIn") || "Export in") + " Español"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CharacterPreview config={config} />
    </div>
  );
}
