import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import logo from '../../Img/1.jpg';


export function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>SLIDER TEST</h1>
      </div>
    </header>
  )
}