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
  pageSize: '8.5x11' | 'A4' | 'Letter';
  artStyle: 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon';
  genres: string[];
  lineArt: LineArtConfig;
  character: CharacterConfig;
  effects?: EffectsConfig;
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
  pose: 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle';
  expression: string;
  hands: {
    right: 'clawed_upward' | 'open_palm' | 'two_fingers_cast';
    left: 'open_loose' | 'spirit_guiding' | 'half_fist';
  };
  clothing?: {
    type?: string; // e.g. "tattered robe"
    patterns?: string[]; // e.g. ["skeletal", "runes"]
    flow?: 'dynamic' | 'still';
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
  // Environment effects (moved from EffectsConfig)
  weatherEffect?: 'clear' | 'rain' | 'storm' | 'snow' | 'fog';
  timeOfDay?: 'dawn' | 'day' | 'dusk' | 'night';
  particles?: 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks';
}

export interface CompositionConfig {
  characterSizeRatio: '60%' | '70%' | '80%';
  characterPosition: 'centered' | 'slightly_above_center' | 'low_center';
  margin: number; // inches
  characterHeight?: number; // height in meters
}

export const defaultConfig: ColoringBookIllustrationConfig = {
  pageSize: '8.5x11',
  artStyle: 'anime',
  genres: ['isekai', 'dark_fantasy'],
  lineArt: {
    lineWeight: 'bold',
    shading: false,
    grayscale: false,
    cleanLines: true
  },
  character: {
    race: 'undead',
    class: 'necromancer',
    pose: 'three_quarter',
    expression: 'piercing hollow eyes under hood',
    hands: {
      right: 'clawed_upward',
      left: 'open_loose'
    },
    clothing: {
      type: 'tattered robe',
      patterns: ['skeletal', 'runes'],
      flow: 'dynamic'
    }
  },
  effects: {
    magic: {
      type: 'spiral',
      intensity: 'strong'
    },
    spirits: true,
    mist: true,
    groundCracks: true
  },
  background: {
    clouds: true,
    lightning: true,
  },
  composition: {
    characterSizeRatio: '70%',
    characterPosition: 'slightly_above_center',
    margin: 1.0
  }
};
