"use client";

import { useRacesClasses } from "@/modules/character-creator/data/useRacesClasses";
import { useCharacterPreviewStore } from "../store/useCharacterPreviewStore";

export function CharacterDisplay() {
  const { config } = useCharacterPreviewStore();
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

  return (
    <div className="relative aspect-[1/1.3] w-full rounded-lg border border-dashed border-muted-foreground bg-background p-2">
      <div className="flex h-full flex-col items-center justify-center space-y-2 text-center">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium">Character Configuration</p>
          <p className="text-xs mt-1">
            <strong>Race:</strong> {getRaceName(config.character?.race)}
          </p>
          <p className="text-xs">
            <strong>Class:</strong> {getClassName(config.character?.class)}
          </p>
          <p className="text-xs">
            <strong>Style:</strong> {config.artStyle}
          </p>
          <p className="text-xs">
            <strong>Genre:</strong> {config.genres?.join(", ") || "None"}
          </p>
          <p className="text-xs">
            <strong>Pose:</strong> {config.character?.pose || "Default"}
          </p>
          <p className="text-xs mt-4 italic">
            Preview would display here in a real implementation
          </p>
        </div>
      </div>
    </div>
  );
}
