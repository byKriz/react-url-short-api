import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleMenuClick = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={styles.Header}>
      <img src={logo} alt="logo" />
      <TfiMenu className={styles.hamMenu} onClick={handleMenuClick}/>
      <nav className={navActive ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`}>
        <div className={styles.mobileContainer}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <ul className={styles.navLogin}>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className={styles.desktopContainer}>
            <ul className={styles.desktopNav}>
              <li>Feature</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <div>
              <ul>
                <li className={styles.deskLogin}>Login</li>
                <li className={styles.deskSignUp}>Sign Up</li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
  );
};
