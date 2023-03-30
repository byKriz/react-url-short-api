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
        <div className={styles.bar}></div>

        <FeatureItem title={"Brad Recognition"} img={"brand"}>
          Boos your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content
        </FeatureItem>
        <FeatureItem title={"Detailed Records"} img={"detailed"}>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions
        </FeatureItem>
        <FeatureItem title={"Fully Customizable"} img={"customizable"}>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement
        </FeatureItem>
      </div>
    </section>
  );
};
