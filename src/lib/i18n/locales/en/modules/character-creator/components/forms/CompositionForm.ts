export const CompositionForm = {
  title: 'Composition',
  description: 'Configure the layout and positioning of your character in the illustration',
  sizeRatioSelect: 'Select size ratio',
  positionSelect: 'Select position',
  characterSize: {
    label: 'Character Size Ratio',
    description: 'The size of the character relative to the page',
    options: {
      '60%': '60%',
      '70%': '70%',
      '80%': '80%'
    }
  },
  characterPosition: {
    label: 'Character Position',
    description: 'The vertical positioning of the character',
    options: {
      centered: 'Centered',
      slightly_above_center: 'Slightly Above Center',
      low_center: 'Low Center'
    }
  },
  margin: {
    label: 'Page Margin',
    description: 'Space between the edge of the page and the illustration',
    unit: 'inches'
  }
};
