import React from "react";
import { FeatureItem } from "../../components/FeatureItem/FeatureItem";
import styles from "./Details.module.scss";

export const Details = () => {
  return (
    <section className={styles.Details}>
      <div className={styles.titleContainer}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the with our advanced
          statistic dashboard
        </p>
      </div>
      <div className={styles.features}>
        <FeatureItem title={"Brad Recognition"} img={"brand"}>
          Boos your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content
        </FeatureItem>
      </div>
    </section>
  );
};
