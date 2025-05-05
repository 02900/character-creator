"use client";

import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PreviewHeader() {
  return (
    <CardHeader>
      <CardTitle>Character Preview</CardTitle>
      <CardDescription>
        Preview your character based on the current configuration.
      </CardDescription>
    </CardHeader>
  );
}
