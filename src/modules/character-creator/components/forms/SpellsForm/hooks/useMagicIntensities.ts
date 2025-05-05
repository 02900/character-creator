import { useI18n } from "@/lib/i18n";

export interface MagicIntensity {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized magic intensity data
 * for the character creator's effects form.
 */
export function useMagicIntensities() {
  const { t } = useI18n();

  // Array of all magic intensity IDs
  const magicIntensityIds = [
    "subtle",
    "moderate",
    "strong",
    "overwhelming"
  ];

  // Map the IDs to MagicIntensity objects with translated names
  const magicIntensities: MagicIntensity[] = magicIntensityIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.EffectsForm.magic.intensities.${id}`)
  }));

  return { magicIntensities };
}
