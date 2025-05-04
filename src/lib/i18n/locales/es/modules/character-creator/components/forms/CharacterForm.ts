export const CharacterForm = {
  title: 'Detalles del Personaje',
  description: 'Configura la apariencia y características de tu personaje',
  expression: {
    label: 'Expresión del Personaje',
    placeholder: 'ej. ojos huecos penetrantes bajo capucha',
    description: 'Describe la expresión facial o características faciales notables'
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
      right: {
        clawed_upward: 'Garras hacia arriba',
        open_palm: 'Palma abierta',
        two_fingers_cast: 'Lanzamiento con dos dedos'
      },
      left: {
        open_loose: 'Abierta y relajada',
        spirit_guiding: 'Guiando espíritus',
        half_fist: 'Medio puño'
      }
    }
  },
  clothing: {
    title: 'Vestimenta',
    type: {
      label: 'Tipo de Vestimenta',
      placeholder: 'ej. túnica desgarrada'
    },
    flow: 'Flujo de la Vestimenta',
    flowTypes: {
      dynamic: 'Dinámico',
      still: 'Estático'
    },
    patterns: {
      label: 'Patrones',
      placeholder: 'Añadir un patrón',
      addButton: 'Añadir'
    }
  }
};
