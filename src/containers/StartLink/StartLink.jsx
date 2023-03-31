import React from "react";
import styles from "./StartLink.module.scss";
import { GetStartedBtn } from "../../components/GetStartedBtn/GetStartedBtn";


export const StartLink = () => {
  return (
    <div className={styles.StartLink}>
      <h3>Boost your links today</h3>
      <GetStartedBtn />
    </div>
  );
};
