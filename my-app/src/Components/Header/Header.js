import React from 'react';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const readings = useSelector((state) => state.readings.readings);
  
  return(
  <div className={styles.Header}>
    Header Component
  </div>
)};


export default Header;
