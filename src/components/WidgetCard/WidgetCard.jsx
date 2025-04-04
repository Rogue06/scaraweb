// src/components/WidgetCard/WidgetCard.jsx
import React from "react";
import styles from "./WidgetCard.module.css";

const WidgetCard = ({ title, children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {" "}
      {/* Combine les classes */}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default WidgetCard;
