"use client";

import { useCharacterPreview } from "../../../hooks/useCharacterPreview";

export function ConfigSummary() {
  const { config } = useCharacterPreview();

  return (
    <div className="rounded-md bg-muted p-3">
      <div className="text-sm font-medium">Configuration Summary</div>
      <div className="mt-2 text-xs space-y-1">
        <p>
          <strong>Page Size:</strong> {config.composition?.pageSize || "Default"}
        </p>
        <p>
          <strong>Line Weight:</strong> {config.lineArt?.lineWeight || "Medium"}
        </p>
        <p>
          <strong>Character Position:</strong>{" "}
          {config.composition?.characterPosition || "Center"}
        </p>
        {config.effects?.magic && (
          <p>
            <strong>Magic:</strong> {config.effects.magic.type} (
            {config.effects.magic.intensity})
          </p>
        )}
      </div>
    </div>
  );
}
