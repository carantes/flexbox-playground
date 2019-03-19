import data from './data.json';

const props = (state = data, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PANEL':
      const { styles } = action;

      Object.entries(styles).forEach(item => {
        let key = item[0];
        let value = item[1];
        let currentProp = state.find(prop => prop.name === key);
  
        if (currentProp) {
          currentProp['value'] = value;
        }
      });

      return state;
    case 'SET_PANEL_STYLE':
      const { key, value } = action;

      return state.map(item => {
        if (item.name === key) {
          item.value = value;
        }

        return item;
      })
    default:
      return state;
  }
}

export default props;
