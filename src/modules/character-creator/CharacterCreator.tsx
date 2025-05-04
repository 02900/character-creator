"use client";

import { useState } from "react";
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
import { ColoringBookIllustrationConfig, defaultConfig } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";
import { exportCharacterInLanguage, downloadJson } from "./utils/characterExport";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

export function CharacterCreator() {
  const [config, setConfig] =
    useState<ColoringBookIllustrationConfig>(defaultConfig);
  const { t } = useI18n();

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
    a.download = "character-config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast(t("common.exportSuccess"), {
      description: t("common.exportDescription"),
    });
  };
  
  // Export character data with language-specific translations
  const exportTranslatedConfig = (language: 'en' | 'es') => {
    try {
      // Get translated configuration data
      const translatedData = exportCharacterInLanguage(config, language);
      
      // Generate filename with language code
      const filename = `character-${language}.json`;
      
      // Download the translated configuration
      downloadJson(translatedData, filename);
      
      // Show success message with language name
      const languageName = language === 'en' ? 'English' : 'Español';
      toast(t("common.exportSuccess"), {
        description: t("common.exportLanguageDescription", { language: languageName }),
      });
    } catch (error) {
      console.error('Export failed:', error);
      toast.error(t("common.exportError"), {
        description: t("common.exportErrorDescription"),
      });
    }
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="md:w-2/3">
        <Tabs defaultValue="character" className="w-full">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="page">Page</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
            <TabsTrigger value="lineart">Line Art</TabsTrigger>
            <TabsTrigger value="raceclass">Race/Class</TabsTrigger>
            <TabsTrigger value="character">Character</TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="composition">Composition</TabsTrigger>
          </TabsList>

          <Card className="mt-4 p-4">
            <TabsContent value="page" className="mt-0">
              <PageSizeForm 
                config={config}
                updateConfig={updateConfig}
              />
            </TabsContent>
            
            <TabsContent value="style" className="mt-0">
              <StyleForm 
                config={config}
                updateConfig={updateConfig}
              />
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

        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={resetConfig}>
            {t("common.reset") || "Reset"}
          </Button>
          
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
              <DropdownMenuItem onClick={() => exportTranslatedConfig('en')}>
                {(t("common.exportIn") || "Export in") + " English"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportTranslatedConfig('es')}>
                {(t("common.exportIn") || "Export in") + " Español"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="md:w-1/3">
        <CharacterPreview config={config} />
      </div>
    </div>
  );
}
