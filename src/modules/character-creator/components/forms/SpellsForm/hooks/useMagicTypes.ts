import { useI18n } from "@/lib/i18n";

export interface MagicType {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized magic type data
 * for the character creator's effects form.
 */
export function useMagicTypes() {
  const { t } = useI18n();

  // Array of all magic type IDs
  const magicTypeIds = [
    "spiral",
    "orb",
    "flame",
    "aura",
    "lightning",
    "water",
    "earth",
    "wind",
    "shadow",
    "light"
  ];

  // Map the IDs to MagicType objects with translated names
  const magicTypes: MagicType[] = magicTypeIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.EffectsForm.magic.types.${id}`)
  }));

  return { magicTypes };
}
