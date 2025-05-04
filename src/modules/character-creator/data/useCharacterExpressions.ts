import { useI18n } from "@/lib/i18n";

export interface Expression {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized character expression data
 * for the character creator.
 */
export function useCharacterExpressions() {
  const { t } = useI18n();

  // Array of all expression IDs
  const expressionIds = [
    "determined_gaze",
    "gentle_smile",
    "fierce_battle_cry",
    "mysterious_smirk",
    "serene_meditation",
    "tearful_resolve",
    "stoic_confidence",
    "shocked_surprise",
    "menacing_glare",
    "playful_wink",
    "solemn_frown",
    "battle_hardened_focus",
    "mischievous_grin",
    "intense_concentration",
    "naive_wonder"
  ];

  // Map the IDs to Expression objects with translated names
  const expressions: Expression[] = expressionIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.CharacterForm.expression.options.${id}`)
  }));

  return { expressions };
}
