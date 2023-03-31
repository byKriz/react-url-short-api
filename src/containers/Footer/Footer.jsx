import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/icons/logo.svg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      {/* <img src={logo} alt="logo" /> */}
      <h3>Shortly</h3>
      <div className={styles.listContainer}>
        <h4>Features</h4>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.iconContainers}>
        <AiFillFacebook />
        <AiOutlineTwitter />
        <FaPinterest />
        <AiOutlineInstagram />
      </div>
    </footer>
  );
};
