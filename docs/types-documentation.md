# Character Creator Type Documentation

This document provides comprehensive documentation for the types defined in `src/lib/types.ts`, describing the purpose of each property.

## Basic Types

### Race
```typescript
export interface Race {
  id: string;       // Unique identifier for the race (e.g., "elf", "human", "undead")
  name: string;     // Display name of the race for UI presentation
  description: string; // Descriptive text explaining the race characteristics
}
```

### Class
```typescript
export interface Class {
  id: string;       // Unique identifier for the class (e.g., "wizard", "warrior", "necromancer")
  name: string;     // Display name of the class for UI presentation
  description: string; // Descriptive text explaining the class abilities and traits
}
```

## Main Configuration

### ColoringBookIllustrationConfig
The root configuration object that contains all settings for a character illustration.

```typescript
export interface ColoringBookIllustrationConfig {
  artStyle: 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon'; // Visual style of the illustration
  genres: string[];         // Genres that influence the overall aesthetic (e.g., "fantasy", "sci-fi")
  lineArt: LineArtConfig;   // Line art settings for the illustration
  character: CharacterConfig; // Character appearance and attributes
  effects?: EffectsConfig;  // Optional special effects applied to the character
  weapons?: WeaponsConfig;  // Optional weapon configuration
  background?: BackgroundConfig; // Optional background settings
  composition: CompositionConfig; // Layout and positioning settings
}
```

### LineArtConfig
Controls the appearance of line work in the illustration.

```typescript
export interface LineArtConfig {
  lineWeight: 'bold' | 'medium' | 'fine'; // Thickness of the lines in the drawing
  shading: boolean;    // Whether shading is applied (must be false for coloring books)
  grayscale: boolean;  // Whether the image is grayscale (must be false for coloring books)
  cleanLines: boolean; // Whether lines are clean and refined vs. sketchy/rough
}
```

### CharacterConfig
Defines the character's appearance, pose, and physical attributes.

```typescript
export interface CharacterConfig {
  race?: string;     // ID of the selected race, references Race.id
  class?: string;    // ID of the selected class, references Class.id
  level?: number;    // Character's power level (1-100)
  sex?: 'male' | 'female' | 'undefined'; // Character's biological sex
  beauty?: number;   // Character's physical attractiveness rating (1-10)
                     // 1: Extremely Plain, 2: Very Plain, 3: Plain, 4: Average,
                     // 5: Attractive, 6: Very Attractive, 7: Beautiful, 8: Very Beautiful,
                     // 9: Stunning, 10: Extraordinarily Beautiful
  pose: 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle' | 'action_ready' | 'casting' | 'dynamic_movement' | 'defensive' | 'meditative'; // Character's stance
  expression: string; // Facial expression description
  muscleDefinition?: 'slim' | 'athletic' | 'muscular' | 'bulky' | 'heroic' | 'average'; // Character's physique type
  hands: {
    right: 'none' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'fist' | 'pointing' | 'weapon_grip' | 'magic_circle'; // Right hand pose
    left: 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting'; // Left hand pose
    // Note: The application supports coordination modes where both hands work together in preset positions:
    // - Weapon grip (both hands holding a weapon)
    // - Shield hold (both hands holding a shield)
    // - Magic circle (both hands creating a magic circle)
    // - Spell casting (both hands in casting gestures)
  };
  clothing?: {
    type?: string;    // Type of clothing worn (e.g., "tattered robe", "plate armor")
    patterns?: string[]; // Patterns or designs on the clothing
    flow?: 'none' | 'dynamic' | 'still'; // How the clothing moves/drapes
  };
}
```

### EffectsConfig
Special visual effects applied to the character or environment.

```typescript
export interface EffectsConfig {
  magic?: {
    type: 'spiral' | 'orb' | 'flame' | 'aura' | 'lightning' | 'water' | 'earth' | 'wind' | 'shadow' | 'light'; // Type of magical effect
    intensity: 'subtle' | 'moderate' | 'strong' | 'overwhelming'; // How prominent the effect is
    color?: string;  // Color of the magical effect (hex code)
  };
  spirits?: boolean;      // Whether spirit entities are present
  mist?: boolean;         // Whether mist/fog surrounds the character
  groundCracks?: boolean; // Whether the ground beneath the character is cracked
  
  raceEffects?: {
    glow?: boolean;       // Whether the character has a racial glow effect
    aura?: 'none' | 'divine' | 'demonic' | 'nature' | 'arcane' | 'elemental'; // Aura type based on race
    wings?: boolean;      // Whether the character has wings
    horns?: boolean;      // Whether the character has horns
    tail?: boolean;       // Whether the character has a tail
    scales?: boolean;     // Whether the character has scales
    elementalAffinity?: 'fire' | 'water' | 'earth' | 'air' | 'light' | 'darkness' | 'none'; // Elemental alignment
  };
  
  classEffects?: {
    weapons?: 'glowing' | 'runic' | 'elemental' | 'spectral' | 'normal'; // Special effect on weapons
    spellbook?: boolean;  // Whether a spellbook is present
    familiar?: boolean;   // Whether a familiar creature is present
    specialAbility?: string; // Description of a special ability being used
    equipment?: string[]; // Additional class-specific equipment items
  };
  
  environmentEffects?: {
    weather?: 'clear' | 'rain' | 'storm' | 'snow' | 'fog'; // Weather conditions
    timeOfDay?: 'dawn' | 'day' | 'dusk' | 'night'; // Time of day lighting
    particles?: 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks'; // Particle effects in the air
  };
}
```

### BackgroundConfig
Settings for the background environment of the illustration.

```typescript
export interface BackgroundConfig {
  clouds?: boolean;      // Whether clouds are visible in the sky
  lightning?: boolean;   // Whether lightning appears in the sky
  scenery?: 'forest' | 'castle' | 'mountain' | 'desert' | 'cave' | 'village' | 'temple' | 'beach' | 'dungeon' | 'city' | 'none'; // Environmental setting
  weatherEffect?: 'clear' | 'rain' | 'storm' | 'snow' | 'fog'; // Weather conditions (duplicated from EffectsConfig)
  timeOfDay?: 'dawn' | 'day' | 'dusk' | 'night'; // Time of day lighting (duplicated from EffectsConfig)
  particles?: 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks'; // Particle effects (duplicated from EffectsConfig)
}
```

### CompositionConfig
Controls the layout and dimensions of the illustration.

```typescript
export interface CompositionConfig {
  pageSize: '8.5x11' | 'A4' | 'Letter'; // Standard paper size for the illustration
  characterSizeRatio: '60%' | '70%' | '80%'; // How much of the page the character occupies
  characterPosition: 'centered' | 'slightly_above_center' | 'low_center'; // Vertical positioning of character
  characterHeight?: number; // Character's height in meters for scale reference
}
```

### WeaponsConfig
Defines the character's weapons and their appearance.

```typescript
export interface WeaponsConfig {
  category: "one_handed" | "two_handed" | "dual_wield" | "none"; // Type of weapon wielding style
  mainHand?: string;     // Type of weapon in main hand (e.g., "sword", "staff")
  offHand?: string;      // Type of weapon in off hand for dual wielding
  twoHanded?: string;    // Type of two-handed weapon
  shield?: boolean;      // Whether a shield is being used
  enchanted?: boolean;   // Whether the weapons have magical properties
  style?: "plain" | "ornate" | "magical" | "runic" | "ancient"; // Visual style of the weapons
}
```

## Default Configuration

The file also defines a `defaultConfig` constant that provides default values for all settings in the `ColoringBookIllustrationConfig`. This serves as:

1. A starting point for new character creations
2. A reference for expected values
3. A fallback for missing properties

The default configuration is for an undead necromancer character with a tattered robe, positioned in a forest at dusk, with various specific attributes preset.
