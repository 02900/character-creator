"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ColoringBookIllustrationConfig } from "@/lib/types";
import { useRacesClasses } from "../data/useRacesClasses";

interface CharacterPreviewProps {
  config: ColoringBookIllustrationConfig;
}

export function CharacterPreview({ config }: CharacterPreviewProps) {
  const { races, classes } = useRacesClasses();

  const getRaceName = (id?: string) => {
    if (!id) return "Not selected";
    const race = races.find((r) => r.id === id);
    return race ? race.name : "Unknown race";
  };

  const getClassName = (id?: string) => {
    if (!id) return "Not selected";
    const classObj = classes.find((c) => c.id === id);
    return classObj ? classObj.name : "Unknown class";
  };

  const generateCharacter = () => {
    toast.success("Character Generation Requested", {
      description:
        "Your character illustration is being generated. This would connect to an AI service in a real implementation.",
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Character Preview</CardTitle>
        <CardDescription>
          Preview your character based on the current configuration.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative aspect-[1/1.3] w-full rounded-lg border border-dashed border-muted-foreground bg-background p-2">
          <div className="flex h-full flex-col items-center justify-center space-y-2 text-center">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Character Configuration</p>
              <p className="text-xs mt-1">
                <strong>Race:</strong> {getRaceName(config.character.race)}
              </p>
              <p className="text-xs">
                <strong>Class:</strong> {getClassName(config.character.class)}
              </p>
              <p className="text-xs">
                <strong>Style:</strong> {config.artStyle}
              </p>
              <p className="text-xs">
                <strong>Genre:</strong> {config.genres.join(", ")}
              </p>
              <p className="text-xs">
                <strong>Pose:</strong> {config.character.pose}
              </p>
              <p className="text-xs mt-4 italic">
                Preview would display here in a real implementation
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full space-y-2">
          <div className="rounded-md bg-muted p-3">
            <div className="text-sm font-medium">Configuration Summary</div>
            <div className="mt-2 text-xs space-y-1">
              <p>
                <strong>Page Size:</strong> {config.pageSize}
              </p>
              <p>
                <strong>Line Weight:</strong> {config.lineArt.lineWeight}
              </p>
              <p>
                <strong>Character Position:</strong>{" "}
                {config.composition.characterPosition}
              </p>
              {config.effects?.magic && (
                <p>
                  <strong>Magic:</strong> {config.effects.magic.type} (
                  {config.effects.magic.intensity})
                </p>
              )}
              {config.background?.sky && (
                <p>
                  <strong>Sky:</strong> {config.background.sky}
                </p>
              )}
            </div>
          </div>

          <Button className="w-full" onClick={generateCharacter}>
            Generate Character
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
