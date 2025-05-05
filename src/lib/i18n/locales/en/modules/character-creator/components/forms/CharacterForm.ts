export const CharacterForm = {
  title: 'Character Details',
  description: 'Configure the appearance and characteristics of your character',
  level: {
    label: 'Character Level',
    value: 'Level {{level}}',
    description: 'Set the power level of your character from novice (1) to legendary (100)'
  },
  expression: {
    label: 'Character Expression',
    placeholder: 'Select an expression',
    description: 'Select the facial expression or notable facial features',
    options: {
      determined_gaze: 'Determined Gaze',
      gentle_smile: 'Gentle Smile',
      fierce_battle_cry: 'Fierce Battle Cry',
      mysterious_smirk: 'Mysterious Smirk',
      serene_meditation: 'Serene Meditation',
      tearful_resolve: 'Tearful Resolve',
      stoic_confidence: 'Stoic Confidence',
      shocked_surprise: 'Shocked Surprise',
      menacing_glare: 'Menacing Glare',
      playful_wink: 'Playful Wink',
      solemn_frown: 'Solemn Frown',
      battle_hardened_focus: 'Battle-hardened Focus',
      mischievous_grin: 'Mischievous Grin',
      intense_concentration: 'Intense Concentration',
      naive_wonder: 'Naive Wonder'
    }
  },
  pose: 'Character Pose',
  poseSelect: 'Select a pose',
  handPositionSelect: 'Select position',
  flowStyleSelect: 'Select flow style',
  
  poses: {
    frontal: 'Frontal',
    three_quarter: 'Three Quarter',
    side: 'Side',
    low_angle: 'Low Angle',
    high_angle: 'High Angle'
  },
  
  hands: {
    title: 'Hand Positions',
    right: 'Right Hand',
    left: 'Left Hand',
    positions: {
      none: 'None (Hidden)',
      right: {
        clawed_upward: 'Clawed Upward',
        open_palm: 'Open Palm',
        two_fingers_cast: 'Two Fingers Casting Gesture',
        fist: 'Clenched Fist',
        pointing: 'Pointing',
        weapon_grip: 'Weapon Grip',
        magic_circle: 'Magic Circle Formation'
      },
      left: {
        open_loose: 'Open Loose',
        spirit_guiding: 'Spirit Guiding Gesture',
        half_fist: 'Half-Fist',
        shield_hold: 'Shield Holding',
        clenched_fist: 'Clenched Fist',
        holding_orb: 'Holding Magical Orb',
        spell_casting: 'Spell Casting Motion'
      }
    }
  },
  clothing: {
    title: 'Clothing',
    type: {
      label: 'Clothing Type',
      placeholder: 'e.g. tattered robe',
      options: {
        magical_academy_uniform: 'Magical Academy Uniform',
        adventurer_guild_armor: 'Adventurer Guild Armor',
        royal_knight_regalia: 'Royal Knight Regalia',
        elven_ranger_garb: 'Elven Ranger Garb',
        dragon_scale_armor: 'Dragon Scale Armor',
        mystic_sage_robes: 'Mystic Sage Robes',
        assassin_guild_attire: 'Assassin Guild Attire',
        demon_lord_vestments: 'Demon Lord Vestments',
        shrine_maiden_outfit: 'Shrine Maiden Outfit',
        beast_tribe_ceremonial_garb: 'Beast Tribe Ceremonial Garb',
        holy_paladin_plate: 'Holy Paladin Plate Armor',
        dark_mage_cloak: 'Dark Mage Cloak',
        samurai_shogun_armor: 'Samurai Shogun Armor',
        ninja_infiltration_suit: 'Ninja Infiltration Suit',
        alchemist_lab_coat: 'Alchemist Lab Coat',
        summoner_ritual_garb: 'Summoner Ritual Garb',
        spirit_medium_kimono: 'Spirit Medium Kimono',
        celestial_dancer_outfit: 'Celestial Dancer Outfit',
        berserker_battle_gear: 'Berserker Battle Gear',
        merchant_guild_attire: 'Merchant Guild Attire',
        royal_court_enchanter_robes: 'Royal Court Enchanter Robes',
        monster_hunter_leather_armor: 'Monster Hunter Leather Armor',
        druid_forest_garments: 'Druid Forest Garments',
        pirate_captain_coat: 'Pirate Captain Coat',
        gladiator_arena_armor: 'Gladiator Arena Armor',
        necromancer_bone_vestments: 'Necromancer Bone Vestments',
        beastmaster_tribal_outfit: 'Beastmaster Tribal Outfit',
        holy_priest_ceremonial_robes: 'Holy Priest Ceremonial Robes',
        steampunk_artifice_gear: 'Steampunk Artifice Gear',
        heroic_legend_outfit: 'Heroic Legend Outfit',
        arcane_battle_mage_attire: 'Arcane Battle Mage Attire',
        celestial_guardian_armor: 'Celestial Guardian Armor',
        void_walker_cloak: 'Void Walker Cloak',
        fae_enchanted_garments: 'Fae Enchanted Garments',
        vampire_noble_attire: 'Vampire Noble Attire',
        elemental_shaman_regalia: 'Elemental Shaman Regalia',
        witch_hunter_coat: 'Witch Hunter Coat',
        astral_traveler_suit: 'Astral Traveler Suit',
        royal_assassin_vestments: 'Royal Assassin Vestments',
        battle_oracle_robes: 'Battle Oracle Robes'
      }
    },
    flow: 'Clothing Flow',
    flowTypes: {
      none: 'None',
      dynamic: 'Dynamic',
      still: 'Still'
    },
    patterns: {
      label: 'Patterns',
      placeholder: 'Add a pattern',
      addButton: 'Add',
      predefinedLabel: 'Common Patterns',
      options: {
        floral: 'Floral',
        geometric: 'Geometric',
        runic: 'Runic',
        celestial: 'Celestial',
        tribal: 'Tribal',
        draconic: 'Draconic',
        arcane_symbols: 'Arcane Symbols',
        elemental: 'Elemental',
        royal_crest: 'Royal Crest',
        divine_sigils: 'Divine Sigils',
        demonic_markings: 'Demonic Markings',
        nature_motifs: 'Nature Motifs',
        astral_signs: 'Astral Signs',
        ancient_script: 'Ancient Script',
        guild_insignia: 'Guild Insignia'
      }
    }
  }
};
