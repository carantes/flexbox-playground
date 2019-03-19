const initialStyle = {
  'display': 'flex',
  'flexDirection': 'row'
}

const canvas = (state = { active_panel: 0, styles: initialStyle }, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PANEL':
      return {
        ...state,
        active_panel: action.id,
      }
    default:
      return state;
  }
}

export default canvas;
