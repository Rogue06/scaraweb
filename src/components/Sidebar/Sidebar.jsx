// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import BreathingWidget from "../BreathingWidget/BreathingWidget";
// Importez des icônes depuis une librairie comme react-icons
import {
  FaTachometerAlt,
  FaMusic,
  FaWind,
  FaBrain,
  FaCode,
} from "react-icons/fa";
import { SiSpotify, SiNotion } from "react-icons/si";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Tableau de bord"); // Gérer l'état actif

  const menuItems = [
    { name: "Tableau de bord", icon: <FaTachometerAlt /> },
    { name: "Méditations guidées", icon: <FaMusic /> },
    { name: "Paysages sonores", icon: <FaWind /> },
    { name: "Exercices de respiration", icon: <FaBrain /> },
    { name: "Zen Coding Mode", icon: <FaCode /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        {/* Remplacer par un vrai logo si disponible */}
        Petit Scaraweb
      </div>

      <nav className={styles.navigation}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={item.name === activeItem ? styles.active : ""}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              {/* Placeholder icône */}
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.breathingSection}>
        <BreathingWidget initialDuration={3} /> {/* Durée en minutes */}
      </div>

      <div className={styles.integrations}>
        {/* Liens - à remplacer par de vrais liens/fonctionnalités */}
        <a href="#" className={styles.integrationLink}>
          {/* Icones Spotify */}
          {<SiSpotify className={styles.integrationIcon} />}
          {/*<span className={styles.iconPlaceholder}>♫</span> {/* Placeholder */}
          Spotify
        </a>
        <a href="#" className={styles.integrationLink}>
          {<SiNotion className={styles.integrationIcon} />}
          {/*<span className={styles.iconPlaceholder}>N</span> {/* Placeholder */}
          Notion
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
