export interface Race {
  id: string;
  name: string;
  description: string;
}

export interface Class {
  id: string;
  name: string;
  description: string;
}

export interface ColoringBookIllustrationConfig {
  artStyle: 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon';
  genres: string[];
  lineArt: LineArtConfig;
  character: CharacterConfig;
  effects?: EffectsConfig;
  weapons?: WeaponsConfig;
  background?: BackgroundConfig;
  composition: CompositionConfig;
}

export interface LineArtConfig {
  lineWeight: 'bold' | 'medium' | 'fine';
  shading: boolean; // must be false
  grayscale: boolean; // must be false
  cleanLines: boolean;
}

export interface CharacterConfig {
  race?: string; // ID of the selected race
  class?: string; // ID of the selected class
  level?: number; // Character level (1-100)
  pose: 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle' | 'action_ready' | 'casting' | 'dynamic_movement' | 'defensive' | 'meditative';
  expression: string;
  muscleDefinition?: 'slim' | 'athletic' | 'muscular' | 'bulky' | 'heroic' | 'average'; // Character's muscle definition
  hands: {
    right: 'none' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'fist' | 'pointing' | 'weapon_grip' | 'magic_circle';
    left: 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting';
  };
  clothing?: {
    type?: string; // e.g. "tattered robe"
    patterns?: string[]; // e.g. ["skeletal", "runes"]
    flow?: 'none' | 'dynamic' | 'still';
  };
}

export interface EffectsConfig {
  magic?: {
    type: 'spiral' | 'orb' | 'flame' | 'aura' | 'lightning' | 'water' | 'earth' | 'wind' | 'shadow' | 'light';
    intensity: 'subtle' | 'moderate' | 'strong' | 'overwhelming';
    color?: string;
  };
  spirits?: boolean;
  mist?: boolean;
  groundCracks?: boolean;
  raceEffects?: {
    glow?: boolean;
    aura?: 'none' | 'divine' | 'demonic' | 'nature' | 'arcane' | 'elemental';
    wings?: boolean;
    horns?: boolean;
    tail?: boolean;
    scales?: boolean;
    elementalAffinity?: 'fire' | 'water' | 'earth' | 'air' | 'light' | 'darkness' | 'none';
  };
  classEffects?: {
    weapons?: 'glowing' | 'runic' | 'elemental' | 'spectral' | 'normal';
    spellbook?: boolean;
    familiar?: boolean;
    specialAbility?: string;
    equipment?: string[];
  };
  environmentEffects?: {
    weather?: 'clear' | 'rain' | 'storm' | 'snow' | 'fog';
    timeOfDay?: 'dawn' | 'day' | 'dusk' | 'night';
    particles?: 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks';
  };
}

export interface BackgroundConfig {
  clouds?: boolean;
  lightning?: boolean;
  // Scenery type for the background
  scenery?: 'forest' | 'castle' | 'mountain' | 'desert' | 'cave' | 'village' | 'temple' | 'beach' | 'dungeon' | 'city' | 'none';
  // Environment effects (moved from EffectsConfig)
  weatherEffect?: 'clear' | 'rain' | 'storm' | 'snow' | 'fog';
  timeOfDay?: 'dawn' | 'day' | 'dusk' | 'night';
  particles?: 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks';
}

export interface CompositionConfig {
  pageSize: '8.5x11' | 'A4' | 'Letter';
  characterSizeRatio: '60%' | '70%' | '80%';
  characterPosition: 'centered' | 'slightly_above_center' | 'low_center';
  characterHeight?: number; // height in meters
}

export interface WeaponsConfig {
  category: "one_handed" | "two_handed" | "dual_wield" | "none";
  mainHand?: string;
  offHand?: string;
  twoHanded?: string;
  shield?: boolean;
  enchanted?: boolean;
  style?: "plain" | "ornate" | "magical" | "runic" | "ancient";
}

export const defaultConfig: ColoringBookIllustrationConfig = {
  artStyle: 'manga',
  genres: ['isekai', 'dark_fantasy', 'post_apocalyptic', 'horror'],
  weapons: {
    category: 'one_handed',
    mainHand: 'staff',
    shield: false,
    enchanted: true,
    style: 'magical'
  },
  lineArt: {
    lineWeight: 'fine',
    shading: false,
    grayscale: false,
    cleanLines: true
  },
  character: {
    race: 'undead',
    class: 'necromancer',
    level: 50,
    pose: 'three_quarter',
    expression: 'piercing hollow eyes under hood',
    muscleDefinition: 'slim',
    hands: {
      right: 'clawed_upward',
      left: 'open_loose'
    },
    clothing: {
      type: 'default',
      patterns: [],
      flow: 'dynamic'
    }
  },
  effects: {
    magic: undefined,
    spirits: false,
    mist: false,
    groundCracks: false
  },
  background: {
    clouds: false,
    lightning: false,
    scenery: 'forest',
    weatherEffect: 'clear',
    timeOfDay: 'dusk',
  },
  composition: {
    pageSize: '8.5x11',
    characterSizeRatio: '70%',
    characterHeight: 1.8,
    characterPosition: 'slightly_above_center',
  }
};
