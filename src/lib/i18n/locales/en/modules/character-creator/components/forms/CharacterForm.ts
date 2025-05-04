export const CharacterForm = {
  title: 'Character Details',
  description: 'Configure the appearance and characteristics of your character',
  expression: {
    label: 'Character Expression',
    placeholder: 'e.g. piercing hollow eyes under hood',
    description: 'Describe the facial expression or notable facial features'
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
      right: {
        clawed_upward: 'Clawed Upward',
        open_palm: 'Open Palm',
        two_fingers_cast: 'Two Fingers Cast'
      },
      left: {
        open_loose: 'Open Loose',
        spirit_guiding: 'Spirit Guiding',
        half_fist: 'Half Fist'
      }
    }
  },
  clothing: {
    title: 'Clothing',
    type: {
      label: 'Clothing Type',
      placeholder: 'e.g. tattered robe'
    },
    flow: 'Clothing Flow',
    flowTypes: {
      dynamic: 'Dynamic',
      still: 'Still'
    },
    patterns: {
      label: 'Patterns',
      placeholder: 'Add a pattern',
      addButton: 'Add'
    }
  }
};
