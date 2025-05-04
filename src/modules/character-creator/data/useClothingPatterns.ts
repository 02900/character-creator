import { useI18n } from "@/lib/i18n";

export interface ClothingPattern {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized clothing pattern data
 * for the character creator.
 */
export function useClothingPatterns() {
  const { t } = useI18n();

  // Array of all pattern IDs
  const patternIds = [
    "floral",
    "geometric",
    "runic",
    "celestial",
    "tribal",
    "draconic",
    "arcane_symbols",
    "elemental",
    "royal_crest",
    "divine_sigils",
    "demonic_markings",
    "nature_motifs",
    "astral_signs",
    "ancient_script",
    "guild_insignia"
  ];

  // Map the IDs to ClothingPattern objects with translated names
  const patterns: ClothingPattern[] = patternIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.CharacterForm.clothing.patterns.options.${id}`)
  }));

  return { patterns };
}
