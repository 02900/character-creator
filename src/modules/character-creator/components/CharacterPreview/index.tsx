"use client";

import { Card, CardContent } from "@/components/ui/card";
// Direct hook import removed - child components will import directly as needed
import { PreviewHeader } from "./components/PreviewHeader";
import { CharacterDisplay } from "./components/CharacterDisplay";
import { ConfigSummary } from "./components/ConfigSummary";
import { GenerateButton } from "./components/GenerateButton";
// No longer need initialization hook with centralized store

export function CharacterPreview() {
  // We no longer need to extract or pass config as the child components
  // will access the store directly through their own hooks

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
