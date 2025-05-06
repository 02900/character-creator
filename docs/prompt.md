# Character Creator — TypeScript Definitions

This document defines the structure for configuring high-definition character. These configurations are provided in JSON format and used to generate illustrations without the need for questions or clarifications.

---

## 📚 Core Types

### `Race`
Represents the species or lineage of a character.

```ts
export interface Race {
  id: string;            // Unique race identifier (e.g., "elf", "human", "undead")
  name: string;          // Display name used in UI
  description: string;   // Description of race characteristics
}
```

### `Class`
Defines the character’s archetype or profession.

```ts
export interface Class {
  id: string;            // Unique class identifier (e.g., "wizard", "warrior")
  name: string;          // Display name used in UI
  description: string;   // Description of class abilities and role
}
```

---

## 🧾 Main Configuration

### `ColoringBookIllustrationConfig`
The top-level configuration object for generating character illustrations.

```ts
export interface ColoringBookIllustrationConfig {
  artStyle: 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon'; // Visual art style
  genres: string[];              // Thematic genres influencing the aesthetic
  lineArt: LineArtConfig;        // Line style configuration
  character: CharacterConfig;    // Visual and narrative details of the character
  effects?: EffectsConfig;       // Optional visual effects
  weapons?: WeaponsConfig;       // Optional weapon details
  background?: BackgroundConfig; // Optional background details
  composition: CompositionConfig; // Page layout and character positioning
}
```

---

### `LineArtConfig`
Defines how lines are rendered in the illustration.

```ts
export interface LineArtConfig {
  lineWeight: 'bold' | 'medium' | 'fine'; // Line thickness
  shading: boolean;                       // Should always be false for coloring books
  grayscale: boolean;                     // Should always be false for coloring books
  cleanLines: boolean;                    // Use clean vs. sketchy line work
}
```

---

### `CharacterConfig`
Describes the character's appearance, posture, and gear.

```ts
export interface CharacterConfig {
  race?: string;         // References Race.id
  class?: string;        // References Class.id
  level?: number;        // Character's level (e.g., 1–100)
  pose: 'frontal' | 'three_quarter' | 'side' | 'low_angle' | 'high_angle';
  expression: string;    // Facial expression
  hands: {
    right: 'none' | 'clawed_upward' | 'open_palm' | 'two_fingers_cast' | 'fist' | 'pointing' | 'weapon_grip' | 'magic_circle';
    left: 'none' | 'open_loose' | 'spirit_guiding' | 'half_fist' | 'shield_hold' | 'clenched_fist' | 'holding_orb' | 'spell_casting';
  };
  clothing?: {
    type?: string;           // Garment style (e.g., "tattered robe", "armor")
    patterns?: string[];     // Design elements or motifs
    flow?: 'none' | 'dynamic' | 'still'; // Fabric movement style
  };
}
```

---

### `EffectsConfig`
Configures magical, environmental, or race-specific visual effects.

```ts
export interface EffectsConfig {
  magic?: {
    type: 'spiral' | 'orb' | 'flame' | 'aura' | 'lightning' | 'water' | 'earth' | 'wind' | 'shadow' | 'light';
    intensity: 'subtle' | 'moderate' | 'strong' | 'overwhelming';
    color?: string; // Hex code (optional)
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
```

---

### `BackgroundConfig`
Controls the visual setting behind the character.

```ts
export interface BackgroundConfig {
  clouds?: boolean;
  lightning?: boolean;
  scenery?: 'forest' | 'castle' | 'mountain' | 'desert' | 'cave' | 'village' | 'temple' | 'beach' | 'dungeon' | 'city' | 'none';
  weatherEffect?: 'clear' | 'rain' | 'storm' | 'snow' | 'fog';
  timeOfDay?: 'dawn' | 'day' | 'dusk' | 'night';
  particles?: 'none' | 'dust' | 'leaves' | 'embers' | 'snowflakes' | 'sparks';
}
```

---

### `CompositionConfig`
Defines page layout, proportions, and positioning.

```ts
export interface CompositionConfig {
  pageSize: '8.5x11' | 'A4' | 'Letter';
  characterSizeRatio: '60%' | '70%' | '80%';
  characterPosition: 'centered' | 'slightly_above_center' | 'low_center';
  characterHeight?: number;    // Optional scale reference in meters
}
```

---

### `WeaponsConfig`
Specifies weapons and their stylistic details.

```ts
export interface WeaponsConfig {
  category: 'one_handed' | 'two_handed' | 'dual_wield' | 'none';
  mainHand?: string;     // Main-hand weapon type
  offHand?: string;      // Off-hand weapon for dual wielding
  twoHanded?: string;    // Two-handed weapon type
  shield?: boolean;      // Whether a shield is equipped
  enchanted?: boolean;   // Magical properties
  style?: 'plain' | 'ornate' | 'magical' | 'runic' | 'ancient';
}
```

---

## ✅ Prompt Usage

To generate an image:

> Provide a JSON payload following the structure above.  
> All drawings must be clean line art only — no shading or grayscale — and suitable for coloring books. Only use lines, no color.