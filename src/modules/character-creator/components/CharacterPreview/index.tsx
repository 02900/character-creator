"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ColoringBookIllustrationConfig } from "@/lib/types";
import { PreviewHeader } from "./components/PreviewHeader";
import { CharacterDisplay } from "./components/CharacterDisplay";
import { ConfigSummary } from "./components/ConfigSummary";
import { GenerateButton } from "./components/GenerateButton";
import { useCharacterPreviewInit } from "./hooks/useCharacterPreviewInit";

interface CharacterPreviewProps {
  config: ColoringBookIllustrationConfig;
}

export function CharacterPreview({ config }: CharacterPreviewProps) {
  useCharacterPreviewInit({ config });

  return (
    <Card className="h-full">
      <PreviewHeader />
      <CardContent className="flex flex-col items-center">
        <CharacterDisplay />
        
        <div className="mt-6 w-full space-y-2">
          <ConfigSummary />
          <GenerateButton />
        </div>
      </CardContent>
    </Card>
  );
}
