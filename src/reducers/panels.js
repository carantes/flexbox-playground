const sampleData = [
  {
    title: 'First',
    styles: {
      'flexGrow': 1,
      'alignContent': 'flex-start',
      'alignItems': 'flex-start'
    },
  },
  {
    title: 'Second',
    styles: {
      'flexGrow': 3,
      'alignContent': 'flex-start',
      'alignItems': 'center'
    },
  }
]

const panels = (state = sampleData, action) => {
  switch (action.type) {
    case 'SET_PANEL_STYLE':
      const { id, key, value } = action;
      const panel = state[id]; 

      state[id] = {
        ...panel,
        styles: {
          ...panel.styles,
          [key]: value
        }
      }
      
      return [
        ...state
      ]
    default:
      return state;
  }
}

export default panels;
