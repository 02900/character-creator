"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function GenerateButton() {
  const generateCharacter = () => {
    toast.success("Character Generation Requested", {
      description:
        "Your character illustration is being generated. This would connect to an AI service in a real implementation.",
    });
  };

  return (
    <Button className="w-full" onClick={generateCharacter}>
      Generate Character
    </Button>
  );
}
