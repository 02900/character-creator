import { useI18n } from "@/lib/i18n";

export interface WeaponType {
  id: string;
  name: string;
}

export interface ShieldType {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized weapon type data
 * for the character creator's weapons form.
 */
export function useWeaponTypes() {
  const { t } = useI18n();

  // Array of one-handed weapon type IDs
  const oneHandedWeaponIds = [
    "sword",
    "dagger",
    "axe",
    "mace",
    "rapier",
    "wand",
    "hammer",
    "sickle",
    "flail"
  ];

  // Array of two-handed weapon type IDs
  const twoHandedWeaponIds = [
    "greatsword",
    "battleaxe",
    "warhammer",
    "spear",
    "staff",
    "halberd",
    "greatbow",
    "crossbow",
    "polearm"
  ];

  // Array of shield type IDs
  const shieldTypeIds = [
    "buckler",
    "round_shield",
    "kite_shield",
    "tower_shield",
    "magic_orb"
  ];

  // Map the IDs to WeaponType objects with translated names
  const oneHandedWeapons: WeaponType[] = oneHandedWeaponIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.WeaponsForm.weapons.oneHanded.${id}`)
  }));

  const twoHandedWeapons: WeaponType[] = twoHandedWeaponIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.WeaponsForm.weapons.twoHanded.${id}`)
  }));

  const shieldTypes: ShieldType[] = shieldTypeIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.WeaponsForm.weapons.shields.${id}`)
  }));

  return { oneHandedWeapons, twoHandedWeapons, shieldTypes };
}
