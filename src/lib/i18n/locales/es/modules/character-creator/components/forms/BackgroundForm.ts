export const BackgroundForm = {
  title: 'Fondo',
  description: 'Configura los elementos de fondo para la ilustración de tu personaje',
  skySelect: 'Seleccionar tipo de cielo',
  sky: {
    label: 'Tipo de Cielo',
    description: 'La apariencia del cielo en el fondo',
    types: {
      stormy: 'Tormentoso',
      clear: 'Despejado',
      twilight: 'Crepúsculo'
    }
  },
  clouds: {
    label: 'Nubes',
    description: 'Añade nubes al cielo de fondo'
  },
  lightning: {
    label: 'Relámpagos',
    description: 'Añade efectos de relámpago al fondo'
  },
  // Environment effects section (moved from EffectsForm)
  environment: {
    title: 'Efectos Ambientales',
    weatherEffect: {
      label: 'Efecto Climático',
      types: {
        clear: 'Despejado',
        rain: 'Lluvia',
        storm: 'Tormenta',
        snow: 'Nieve',
        fog: 'Niebla'
      }
    },
    timeOfDay: {
      label: 'Hora del Día',
      types: {
        dawn: 'Amanecer',
        day: 'Día',
        dusk: 'Atardecer',
        night: 'Noche'
      }
    },
    particles: {
      label: 'Efecto de Partículas',
      placeholder: 'Selecciona un efecto de partículas',
      description: 'Partículas ambientales que mejoran la atmósfera del entorno',
      types: {
        none: 'Ninguno',
        dust: 'Partículas de Polvo',
        leaves: 'Hojas Cayendo',
        embers: 'Brasas Flotantes',
        snowflakes: 'Copos de Nieve',
        sparks: 'Destellos Mágicos'
      }
    }
  }
};
