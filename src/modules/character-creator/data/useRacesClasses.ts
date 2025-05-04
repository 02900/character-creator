import { useI18n } from "@/lib/i18n";
import { Race, Class } from "@/lib/types";

/**
 * A hook that provides internationalized races and classes data
 * for the character creator.
 */
export function useRacesClasses() {
  const { t } = useI18n();

  // Create an array of all race IDs
  const raceIds = [
    "human", "elf", "dwarf", "hobbit", "orc", "goblin", "dragon", "fairy", 
    "mermaid", "vampire", "werewolf", "neko", "demon", "angel", "undead", 
    "lizardman", "golem", "doppelganger", "kitsune", "slime", "centaur", 
    "merman", "treant", "troll", "birdman", "succubus", "gnoll", "triton", 
    "minotaur", "giant", "gnome", "spirit", "elemental", "beastman", "arachne", 
    "chimera", "nymph", "ghost", "gorgon", "homunculus", "satyr", "banshee", 
    "dryad", "djinn", "oni", "cyclops", "darkfairy", "harpy", "lamia"
  ];

  // Create an array of all class IDs
  const classIds = [
    "wizard", "warrior", "cleric", "thief", "bard", "druid", "paladin", 
    "hunter", "monk", "necromancer", "assassin", "shaman", "sorcerer", 
    "warlock", "ranger", "barbarian", "alchemist", "summoner", "demonhunter", 
    "psychic", "knight", "pirate", "artificer", "archer", "samurai", "ninja", 
    "priest", "mystic", "judge", "swordsman"
  ];

  // Map the IDs to Race objects with translated name and description
  const races: Race[] = raceIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.data.races.${id}.name`),
    description: t(`modules.character-creator.components.data.races.${id}.description`)
  }));

  // Map the IDs to Class objects with translated name and description
  const classes: Class[] = classIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.data.classes.${id}.name`),
    description: t(`modules.character-creator.components.data.classes.${id}.description`)
  }));

  return { races, classes };
}
