import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Playground from './components/Playground';
import Canvas from './components/Canvas';
import Toolbox from './components/Toolbox';
import { setActivePanel, setPanelStyle } from './actions';

class App extends Component {
  render() {
    const { 
      panels,
      props,
      canvas,
      selectPanel,
      updateStyle
    } = this.props;

    return (
      <Playground title="Welcome to Flexbox Playground">
        <Canvas items={panels} styles={canvas.styles} activePanel={canvas.active_panel} onSelectPanel={selectPanel} />
        <Toolbox items={props} onChange={(key, value) => updateStyle(canvas.active_panel, key, value)} />
      </Playground>
    );
  }
}

const mapStateToProps = ({ panels, props, canvas }) => ({
  panels,
  props,
  canvas,
});

const mapDispatchToProps = dispatch => ({
  selectPanel: (id, style) => dispatch(setActivePanel(id, style)),
  updateStyle: (id, key, value) => dispatch(setPanelStyle(id, key, value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
