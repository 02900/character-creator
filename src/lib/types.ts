export interface ColoringBookIllustrationConfig {
  pageSize: '8.5x11' | 'A4' | 'Letter';
  style: 'anime' | 'chibi' | 'dark_fantasy' | 'isekai' | 'manga';
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
  role: string; // e.g. "Undead Sorcerer"
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
    type: 'spiral' | 'orb' | 'flame' | 'aura';
    intensity: 'subtle' | 'strong';
  };
  spirits?: boolean;
  mist?: boolean;
  groundCracks?: boolean;
}

export interface BackgroundConfig {
  clouds?: boolean;
  lightning?: boolean;
  sky?: 'stormy' | 'clear' | 'twilight';
}

export interface CompositionConfig {
  characterSizeRatio: '60%' | '70%' | '80%';
  characterPosition: 'centered' | 'slightly_above_center' | 'low_center';
  margin: number; // inches
}

export const defaultConfig: ColoringBookIllustrationConfig = {
  pageSize: '8.5x11',
  style: 'anime',
  lineArt: {
    lineWeight: 'bold',
    shading: false,
    grayscale: false,
    cleanLines: true
  },
  character: {
    role: 'Undead Sorcerer',
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
    sky: 'stormy'
  },
  composition: {
    characterSizeRatio: '70%',
    characterPosition: 'slightly_above_center',
    margin: 1.0
  }
};
