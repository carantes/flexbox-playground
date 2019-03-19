import React, { Component } from 'react';
import _styles from './Panel.module.css';
import randomcolor from 'randomcolor';

class Panel extends Component {

  constructor(props) {
    super(props);
    
    this.style = {
      backgroundColor: randomcolor()
    }
  }
  

  render() {
    const {
      onSelect,
      children,
      id,
      style = this.style
    } = this.props;

    return (
      <div className={_styles.panel} style={{...this.style, ...style}} onClick={e => onSelect(id, style)} >{ children }</div>
    );
  }
}

export default Panel;