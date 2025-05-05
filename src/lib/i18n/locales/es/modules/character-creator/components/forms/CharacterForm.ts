export const CharacterForm = {
  title: 'Detalles del Personaje',
  description: 'Configura la apariencia y características de tu personaje',
  level: {
    label: 'Nivel del Personaje',
    value: 'Nivel {{level}}',
    description: 'Establece el nivel de poder de tu personaje desde novato (1) hasta legendario (100)'
  },
  expression: {
    label: 'Expresión del Personaje',
    placeholder: 'Selecciona una expresión',
    description: 'Selecciona la expresión facial o características faciales notables',
    options: {
      determined_gaze: 'Mirada Determinada',
      gentle_smile: 'Sonrisa Amable',
      fierce_battle_cry: 'Grito de Batalla Feroz',
      mysterious_smirk: 'Sonrisa Misteriosa',
      serene_meditation: 'Meditación Serena',
      tearful_resolve: 'Resolución Llorosa',
      stoic_confidence: 'Confianza Estoica',
      shocked_surprise: 'Sorpresa Impactada',
      menacing_glare: 'Mirada Amenazante',
      playful_wink: 'Guiño Juguetón',
      solemn_frown: 'Ceño Solemne',
      battle_hardened_focus: 'Enfoque Curtido en Batalla',
      mischievous_grin: 'Sonrisa Traviesa',
      intense_concentration: 'Concentración Intensa',
      naive_wonder: 'Asombro Ingenuo'
    }
  },
  pose: 'Postura del Personaje',
  poseSelect: 'Seleccionar una postura',
  handPositionSelect: 'Seleccionar posición',
  flowStyleSelect: 'Seleccionar estilo de flujo',

  poses: {
    frontal: 'Frontal',
    three_quarter: 'Tres cuartos',
    side: 'Lateral',
    low_angle: 'Ángulo bajo',
    high_angle: 'Ángulo alto'
  },

  hands: {
    title: 'Posición de las Manos',
    right: 'Mano Derecha',
    left: 'Mano Izquierda',
    positions: {
      none: 'Ninguna (Oculta)',
      right: {
        clawed_upward: 'Garras hacia arriba',
        open_palm: 'Palma abierta',
        two_fingers_cast: 'Lanzamiento con dos dedos',
        fist: 'Puño cerrado',
        pointing: 'Señalando',
        weapon_grip: 'Empuñando arma',
        magic_circle: 'Formando círculo mágico'
      },
      left: {
        open_loose: 'Abierta y relajada',
        spirit_guiding: 'Guiando espíritus',
        half_fist: 'Medio puño',
        shield_hold: 'Sosteniendo escudo',
        clenched_fist: 'Puño apretado',
        holding_orb: 'Sosteniendo orbe mágico',
        spell_casting: 'Lanzando hechizo'
      }
    }
  },
  clothing: {
    title: 'Vestimenta',
    type: {
      label: 'Tipo de Vestimenta',
      placeholder: 'ej. túnica desgarrada',
      options: {
        magical_academy_uniform: 'Uniforme de Academia Mágica',
        adventurer_guild_armor: 'Armadura del Gremio de Aventureros',
        royal_knight_regalia: 'Vestimenta Real de Caballero',
        elven_ranger_garb: 'Atuendo de Guardabosques Élfico',
        dragon_scale_armor: 'Armadura de Escamas de Dragón',
        mystic_sage_robes: 'Túnicas de Sabio Místico',
        assassin_guild_attire: 'Atuendo del Gremio de Asesinos',
        demon_lord_vestments: 'Vestimenta de Señor Demonio',
        shrine_maiden_outfit: 'Traje de Doncella de Santuario',
        beast_tribe_ceremonial_garb: 'Vestimenta Ceremonial de Tribu Bestia',
        holy_paladin_plate: 'Armadura de Placas de Paladín Sagrado',
        dark_mage_cloak: 'Capa de Mago Oscuro',
        samurai_shogun_armor: 'Armadura de Shogun Samurái',
        ninja_infiltration_suit: 'Traje de Infiltración Ninja',
        alchemist_lab_coat: 'Bata de Laboratorio de Alquimista',
        summoner_ritual_garb: 'Vestimenta Ritual de Invocador',
        spirit_medium_kimono: 'Kimono de Médium Espiritual',
        celestial_dancer_outfit: 'Traje de Bailarín Celestial',
        berserker_battle_gear: 'Equipamiento de Batalla Berserker',
        merchant_guild_attire: 'Atuendo del Gremio de Mercaderes',
        royal_court_enchanter_robes: 'Túnicas de Encantador de la Corte Real',
        monster_hunter_leather_armor: 'Armadura de Cuero de Cazador de Monstruos',
        druid_forest_garments: 'Vestimenta Forestal de Druida',
        pirate_captain_coat: 'Abrigo de Capitán Pirata',
        gladiator_arena_armor: 'Armadura de Arena de Gladiador',
        necromancer_bone_vestments: 'Vestimenta de Huesos de Nigromante',
        beastmaster_tribal_outfit: 'Traje Tribal de Domador de Bestias',
        holy_priest_ceremonial_robes: 'Túnicas Ceremoniales de Sacerdote Sagrado',
        steampunk_artifice_gear: 'Equipo de Artífice Steampunk',
        heroic_legend_outfit: 'Atuendo de Leyenda Heroica',
        arcane_battle_mage_attire: 'Atuendo de Mago de Batalla Arcano',
        celestial_guardian_armor: 'Armadura de Guardián Celestial',
        void_walker_cloak: 'Capa de Caminante del Vacío',
        fae_enchanted_garments: 'Vestimenta Encantada de Hadas',
        vampire_noble_attire: 'Vestimenta Noble Vampírica',
        elemental_shaman_regalia: 'Regalia de Chamán Elemental',
        witch_hunter_coat: 'Abrigo de Cazador de Brujas',
        astral_traveler_suit: 'Traje de Viajero Astral',
        royal_assassin_vestments: 'Vestimenta de Asesino Real',
        battle_oracle_robes: 'Túnicas de Oráculo de Batalla'
      }
    },
    flow: 'Flujo de la Vestimenta',
    flowTypes: {
      none: 'Ninguno',
      dynamic: 'Dinámico',
      still: 'Estático'
    },
    patterns: {
      label: 'Patrones',
      placeholder: 'Añadir un patrón',
      addButton: 'Añadir',
      predefinedLabel: 'Patrones Comunes',
      options: {
        floral: 'Floral',
        geometric: 'Geométrico',
        runic: 'Rúnico',
        celestial: 'Celestial',
        tribal: 'Tribal',
        draconic: 'Dracónico',
        arcane_symbols: 'Símbolos Arcanos',
        elemental: 'Elemental',
        royal_crest: 'Escudo Real',
        divine_sigils: 'Sigilos Divinos',
        demonic_markings: 'Marcas Demoníacas',
        nature_motifs: 'Motivos Naturales',
        astral_signs: 'Signos Astrales',
        ancient_script: 'Escritura Antigua',
        guild_insignia: 'Insignia de Gremio'
      }
    }
  }
};
