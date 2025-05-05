export const EffectsForm = {
  title: 'Effects',
  description: 'Configure special effects for your character illustration',
  enableMagic: {
    label: 'Enable Magic Effects',
    description: 'Add magical effects to your character'
  },
  magic: {
    title: 'Magic Effects',
    type: 'Magic Type',
    intensity: 'Intensity',
    color: 'Magic Color',
    colorPlaceholder: 'Color hex code',
    typeSelect: 'Select magic type',
    intensitySelect: 'Select intensity',
    types: {
      spiral: 'Spiral Magic',
      orb: 'Magical Orb',
      flame: 'Magical Flame',
      aura: 'Aura Glow',
      lightning: 'Lightning Effect',
      water: 'Water Magic',
      earth: 'Earth Magic',
      wind: 'Wind Magic',
      shadow: 'Shadow Magic',
      light: 'Light Magic'
    },
    intensities: {
      subtle: 'Subtle',
      moderate: 'Moderate',
      strong: 'Strong',
      overwhelming: 'Overwhelming'
    }
  },
  spirits: {
    label: 'Magical Spirits',
    description: 'Small magical spirits or wisps floating around the character'
  },
  mist: {
    label: 'Magical Mist',
    description: 'Mysterious magical mist swirling around the character\'s feet'
  },
  groundCracks: {
    label: 'Ground Cracks',
    description: 'Magical energy causing cracks in the ground beneath the character'
  }
};
