import React from 'react';
import styles from './Playground.module.css'

const Playground = ({ children }) => (
  <div className={styles.playground}>
    {children}
  </div>
)

export default Playground;