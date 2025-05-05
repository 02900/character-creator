import { useI18n } from "@/lib/i18n";

export interface SceneryType {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized scenery type data
 * for the character creator's background form.
 */
export function useSceneryTypes() {
  const { t } = useI18n();

  // Array of all scenery type IDs
  const sceneryTypeIds = [
    "none",
    "forest",
    "castle",
    "mountain",
    "desert",
    "cave",
    "village",
    "temple",
    "beach", 
    "dungeon",
    "city"
  ];

  // Map the IDs to SceneryType objects with translated names
  const sceneryTypes: SceneryType[] = sceneryTypeIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.BackgroundForm.scenery.types.${id}`)
  }));

  return { sceneryTypes };
}
