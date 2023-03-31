import React from "react";
import styles from "./Hero.module.scss";
import ilustration from "../../assets/icons/illustration-working.svg";
import { GetStartedBtn } from "../../components/GetStartedBtn/GetStartedBtn";

export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.imgContainer}>
        <img src={ilustration} alt="ilustration-working" />
      </div>
      <div className={styles.textContainer}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <GetStartedBtn />
      </div>
    </section>
  );
};
