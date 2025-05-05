export const RaceClassForm = {
  title: 'Race and Class',
  description: 'Select the race and class for your character',
  race: 'Race',
  class: 'Class',
  raceSelectPlaceholder: 'Select a race',
  classSelectPlaceholder: 'Select a class',
  combination: {
    title: 'Race and Class Combination',
    description: 'You have selected {race} as race and {class} as class.',
    effect: 'This combination will affect your character\'s characteristics and abilities.'
  },
  // Race effects section
  raceEffects: {
    title: 'Race Effects',
    description: 'Add visual effects and attributes specific to your selected race',
    elementalAffinity: {
      label: 'Elemental Affinity',
      types: {
        fire: 'Fire',
        water: 'Water',
        earth: 'Earth',
        air: 'Air',
        light: 'Light',
        darkness: 'Darkness',
        none: 'None'
      }
    },
    glow: {
      label: 'Racial Glow',
      description: 'Add a subtle glow effect based on race'
    },
    aura: {
      label: 'Aura Type',
      placeholder: 'Select aura type',
      types: {
        none: 'No Aura',
        divine: 'Divine Aura',
        demonic: 'Demonic Aura',
        nature: 'Nature Aura',
        arcane: 'Arcane Aura',
        elemental: 'Elemental Aura'
      }
    },
    wings: {
      label: 'Wings',
      description: 'Add wings appropriate to the character\'s race'
    },
    horns: {
      label: 'Horns',
      description: 'Add horns if appropriate for the character\'s race'
    },
    tail: {
      label: 'Tail',
      description: 'Add a tail if appropriate for the character\'s race'
    },
    scales: {
      label: 'Scales',
      description: 'Add scales if appropriate for the character\'s race'
    }
  },
  // Class effects section
  classEffects: {
    title: 'Class Effects',
    description: 'Add visual effects specific to your selected class',
    weapons: {
      label: 'Weapons Effect',
      types: {
        normal: 'Normal',
        glowing: 'Glowing',
        runic: 'Runic Inscriptions',
        elemental: 'Elemental',
        spectral: 'Spectral'
      }
    },
    spellbook: {
      label: 'Spellbook',
      description: 'Show a magical spellbook for spellcasting classes'
    },
    familiar: {
      label: 'Familiar',
      description: 'Add a magical familiar companion appropriate for the class'
    },
    specialAbility: {
      label: 'Special Ability Effect',
      placeholder: 'e.g., Fire Breath, Shadow Step, Divine Heal',
      description: 'Describe a special ability effect to display for this character'
    },
    equipment: {
      label: 'Equipment Effects',
      placeholder: 'Add special equipment...',
      buttonText: 'Add',
      description: 'Add special equipment effects like glowing artifacts, enchanted items, etc.'
    }
  }
};
