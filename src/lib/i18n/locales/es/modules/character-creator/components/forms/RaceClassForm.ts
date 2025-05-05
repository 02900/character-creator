export const RaceClassForm = {
  title: 'Raza y Clase',
  description: 'Selecciona la raza y clase para tu personaje',
  race: 'Raza',
  class: 'Clase',
  raceSelectPlaceholder: 'Selecciona una raza',
  classSelectPlaceholder: 'Selecciona una clase',
  combination: {
    title: 'Combinación de Raza y Clase',
    description: 'Has seleccionado {race} como raza y {class} como clase.',
    effect: 'Esta combinación afectará las características y habilidades de tu personaje.'
  },
  // Race effects section
  raceEffects: {
    title: 'Efectos de Raza',
    description: 'Añade efectos visuales y atributos específicos para tu raza seleccionada',
    elementalAffinity: {
      label: 'Afinidad Elemental',
      types: {
        fire: 'Fuego',
        water: 'Agua',
        earth: 'Tierra',
        air: 'Aire',
        light: 'Luz',
        darkness: 'Oscuridad',
        none: 'Ninguno'
      }
    },
    glow: {
      label: 'Brillo Racial',
      description: 'Añade un efecto de brillo sutil basado en la raza'
    },
    aura: {
      label: 'Tipo de Aura',
      placeholder: 'Selecciona tipo de aura',
      types: {
        none: 'Sin Aura',
        divine: 'Aura Divina',
        demonic: 'Aura Demoníaca',
        nature: 'Aura Natural',
        arcane: 'Aura Arcana',
        elemental: 'Aura Elemental'
      }
    },
    wings: {
      label: 'Alas',
      description: 'Añade alas apropiadas para la raza del personaje'
    },
    horns: {
      label: 'Cuernos',
      description: 'Añade cuernos si son apropiados para la raza del personaje'
    },
    tail: {
      label: 'Cola',
      description: 'Añade una cola si es apropiada para la raza del personaje'
    },
    scales: {
      label: 'Escamas',
      description: 'Añade escamas si son apropiadas para la raza del personaje'
    }
  },
  // Class effects section
  classEffects: {
    title: 'Efectos de Clase',
    description: 'Añade efectos visuales específicos para tu clase seleccionada',
    weapons: {
      label: 'Efecto de Armas',
      types: {
        normal: 'Normal',
        glowing: 'Brillante',
        runic: 'Inscripciones Rúnicas',
        elemental: 'Elemental',
        spectral: 'Espectral'
      }
    },
    spellbook: {
      label: 'Libro de Hechizos',
      description: 'Muestra un libro de hechizos mágico para clases lanzadoras de hechizos'
    },
    familiar: {
      label: 'Familiar',
      description: 'Añade un compañero familiar mágico apropiado para la clase'
    },
    specialAbility: {
      label: 'Efecto de Habilidad Especial',
      placeholder: 'ej., Aliento de Fuego, Paso de Sombra, Curación Divina',
      description: 'Describe un efecto de habilidad especial para mostrar en este personaje'
    },
    equipment: {
      label: 'Efectos de Equipamiento',
      placeholder: 'Añadir equipamiento especial...',
      buttonText: 'Añadir',
      description: 'Añade efectos de equipamiento especial como artefactos brillantes, objetos encantados, etc.'
    }
  }
};
