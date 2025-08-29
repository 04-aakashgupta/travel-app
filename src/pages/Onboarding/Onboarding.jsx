import React, { useState } from "react";
import OnboardingCard from "./components/OnboardingCard";
import { onboardingData } from "./components/onboardingData";
import styles from "./Onboarding.module.css";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentScreen = onboardingData[currentIndex];

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/home");
      
    }
  };

  return (
    <div className={styles.onboardingWrapper}>
      {/* Card */}
      <OnboardingCard
        title={currentScreen.title}
        description={currentScreen.description}
        image={currentScreen.image}
        buttonText={currentScreen.buttonText}
        onClick={handleNext}
      />

      {/* Dots Indicator */}
      <div className={styles.dotsWrapper}>
        {onboardingData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Onboarding;