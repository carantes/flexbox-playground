import { combineReducers } from 'redux'
import canvas from './canvas'
import panels from './panels'
import props from './props'

export default combineReducers({
  canvas,
  panels,
  props,
})