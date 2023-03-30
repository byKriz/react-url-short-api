import React from "react";
import styles from "./FeatureItem.module.scss";
import brandIcon from "../../assets/icons/icon-brand-recognition.svg";
import detailedIcon from "../../assets/icons/icon-detailed-records.svg";
import customizableIcon from "../../assets/icons/icon-fully-customizable.svg";

const imgList = {
  brand: brandIcon,
  detailed: detailedIcon,
  customizable: customizableIcon,
};

export const FeatureItem = ({ title, img, children }) => {
  return (
    <div className={styles.FeatureItem}>
      <div className={styles.iconContainer}>
        <img src={imgList[img]} alt={`${img}.svg`} />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};
