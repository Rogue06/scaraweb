// src/components/BreathingWidget/BreathingWidget.jsx
import React from "react";
import styles from "./BreathingWidget.module.css";

// Ce composant est simplifié. Une vraie implémentation
// nécessiterait un état pour l'animation, un timer, etc.
const BreathingWidget = ({ initialDuration }) => {
  return (
    <div className={styles.breathingWidget}>
      <div className={styles.breathingCircle}>
        {/* Ici on pourrait mettre une animation SVG ou CSS */}
        <div className={styles.innerCircle}></div>
      </div>
      <p className={styles.title}>Exercice de respiration</p>
      <span className={styles.duration}>{initialDuration} min</span>
    </div>
  );
};

export default BreathingWidget;
