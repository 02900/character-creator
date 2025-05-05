import { useI18n } from "@/lib/i18n";

export interface ClothingType {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized clothing type data
 * for the character creator.
 */
export function useClothingTypes() {
  const { t } = useI18n();

  // Array of all clothing type IDs
  const clothingTypeIds = [
    "magical_academy_uniform",
    "adventurer_guild_armor",
    "royal_knight_regalia",
    "elven_ranger_garb",
    "dragon_scale_armor",
    "mystic_sage_robes",
    "assassin_guild_attire",
    "demon_lord_vestments",
    "shrine_maiden_outfit",
    "beast_tribe_ceremonial_garb",
    "holy_paladin_plate",
    "dark_mage_cloak",
    "samurai_shogun_armor",
    "ninja_infiltration_suit",
    "alchemist_lab_coat",
    "summoner_ritual_garb",
    "spirit_medium_kimono",
    "celestial_dancer_outfit",
    "berserker_battle_gear",
    "merchant_guild_attire",
    "royal_court_enchanter_robes",
    "monster_hunter_leather_armor",
    "druid_forest_garments",
    "pirate_captain_coat",
    "gladiator_arena_armor",
    "necromancer_bone_vestments",
    "beastmaster_tribal_outfit",
    "holy_priest_ceremonial_robes",
    "steampunk_artifice_gear",
    "heroic_legend_outfit",
    "arcane_battle_mage_attire",
    "celestial_guardian_armor",
    "void_walker_cloak",
    "fae_enchanted_garments",
    "vampire_noble_attire",
    "elemental_shaman_regalia",
    "witch_hunter_coat",
    "astral_traveler_suit",
    "royal_assassin_vestments",
    "battle_oracle_robes"
  ];

  // Map the IDs to ClothingType objects with translated names
  const clothingTypes: ClothingType[] = clothingTypeIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.CharacterForm.clothing.type.options.${id}`)
  }));

  return { clothingTypes };
}
