import React from "react";
import styles from "../Onboarding.module.css";
import arrowIcon from "../../../assets/images/onboarding/arrow_icon.svg";

const OnboardingCard = ({ title, description, image, buttonText, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftside}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.rightside}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={onClick}>
          {buttonText}
          <img src={arrowIcon} alt="arrowIcon" className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
};

export default OnboardingCard;
