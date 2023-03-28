import React from "react";
import styles from "./LinkItem.module.scss";

export const LinkItem = ({ full_short, short, original }) => {
  return (
    <li className={styles.LinkItem}>
      <a href={url.full_short} target="_blank">
        {url.short}
      </a>{" "}
      - {url.original}
    </li>
  );
};
