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
      <button className={styles.copyBtn} onClick={() => copyLink(full_short)}>
        {btnText}
      </button>
    </li>
  );
};
