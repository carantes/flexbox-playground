export const setActivePanel = (id, styles) => ({
  type: 'SET_ACTIVE_PANEL',
  id,
  styles,
});

export const setPanelStyle = (id, key, value) => ({
  type: 'SET_PANEL_STYLE',
  id,
  key,
  value,
});