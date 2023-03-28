import React from "react";
import styles from "./LinkItem.module.scss";

export const LinkItem = ({ full_short, short, original, index }) => {

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
  };


  return (
    <li key={index} className={styles.linkItem}>
      <a
        href={`https://${original}`}
        target="_blank"
        className={styles.originalLink}
      >
        {original}
      </a>
      <div className={styles.bar}></div>
      <a href={full_short} target="_blank">
        {short}
      </a>
      <button
        className={styles.copyBtn}
        onClick={() => copyLink(full_short)}
      >
        Copy
      </button>
    </li>
  );
};
