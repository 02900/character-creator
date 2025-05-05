export const BackgroundForm = {
  title: 'Background',
  description: 'Configure the background elements for your character illustration',
  skySelect: 'Select sky type',
  sky: {
    label: 'Sky Type',
    description: 'The appearance of the sky in the background',
    types: {
      stormy: 'Stormy',
      clear: 'Clear',
      twilight: 'Twilight'
    }
  },
  clouds: {
    label: 'Clouds',
    description: 'Add clouds to the background sky'
  },
  lightning: {
    label: 'Lightning',
    description: 'Add lightning effects to the background'
  },
  // Environment effects section (moved from EffectsForm)
  environment: {
    title: 'Environment Effects',
    weatherEffect: {
      label: 'Weather Effect',
      types: {
        clear: 'Clear',
        rain: 'Rain',
        storm: 'Storm',
        snow: 'Snow',
        fog: 'Fog'
      }
    },
    timeOfDay: {
      label: 'Time of Day',
      types: {
        dawn: 'Dawn',
        day: 'Day',
        dusk: 'Dusk',
        night: 'Night'
      }
    },
    particles: {
      label: 'Particles Effect',
      placeholder: 'Select particles effect',
      description: 'Ambient particles that enhance the environmental atmosphere',
      types: {
        none: 'None',
        dust: 'Dust Particles',
        leaves: 'Falling Leaves',
        embers: 'Floating Embers',
        snowflakes: 'Snowflakes',
        sparks: 'Magic Sparks'
      }
    }
  }
};
