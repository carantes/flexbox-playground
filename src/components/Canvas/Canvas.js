import React from 'react';
import style from './Canvas.module.css';
import Panel from '../Panel';

const Canvas = ({ items, onSelectPanel, styles, activePanel }) => (
  <div className={style.canvas} style={styles} >
    {
      items.map((item,i) => <Panel key={i} id={i} style={item.styles} onSelect={onSelectPanel} active={i === activePanel} >{ item.title }</Panel>)
    }
  </div>
)

export default Canvas;