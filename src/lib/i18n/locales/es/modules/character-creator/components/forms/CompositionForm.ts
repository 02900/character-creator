export const CompositionForm = {
  title: 'Composición',
  description: 'Configura la disposición y posicionamiento de tu personaje en la ilustración',
  sizeRatioSelect: 'Seleccionar tamaño',
  positionSelect: 'Seleccionar posición',
  characterSize: {
    label: 'Tamaño del Personaje',
    description: 'El tamaño del personaje en relación con la página',
    options: {
      '60%': '60%',
      '70%': '70%',
      '80%': '80%'
    }
  },
  characterPosition: {
    label: 'Posición del Personaje',
    description: 'La posición vertical del personaje',
    options: {
      centered: 'Centrado',
      slightly_above_center: 'Ligeramente por encima del centro',
      low_center: 'Centro bajo'
    }
  },
  margin: {
    label: 'Margen de Página',
    description: 'Espacio entre el borde de la página y la ilustración',
    unit: 'pulgadas'
  },
  characterHeight: {
    label: 'Altura del Personaje',
    description: 'Elige la altura de tu personaje en metros. El equivalente en pies y pulgadas se muestra automáticamente.',
    meters: 'm',
    default: '1.70'
  }
};
