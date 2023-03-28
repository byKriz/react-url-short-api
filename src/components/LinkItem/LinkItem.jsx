import React, { useEffect, useState } from "react";
import styles from "./LinkItem.module.scss";

export const LinkItem = ({ full_short, short, original }) => {
  const [btnText, setBtnText] = useState("Copy");

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    setBtnText('Copied!')
    setTimeout(() => setBtnText('Copy'), 2000);
  };


  return (
    <li className={styles.linkItem}>
      <p
        className={styles.originalLink}
      >
        {original}
      </p>
      <div className={styles.bar}></div>
      <a href={full_short} target="_blank" className={styles.shortLink}>
        {short}
      </a>
      <button className={btnText === 'Copy' ? styles.copyBtn : `${styles.copyBtn} ${styles.copied}`} onClick={() => copyLink(full_short)}>
        {btnText}
      </button>
    </li>
  );
};
