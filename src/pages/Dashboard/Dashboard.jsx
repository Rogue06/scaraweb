// src/pages/Dashboard/Dashboard.jsx
import React from "react";
import styles from "./Dashboard.module.css";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
// Importer d'autres composants spécifiques si nécessaire (ex: graphique)

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        {/* Placeholder pour les liens VS Code / GitHub */}
        <div className={styles.integrationLinks}>
          <span>✔ VS Code</span>
          <span>
            <img src="/github-icon-placeholder.png" alt="GitHub" width="16" />{" "}
            GitHub
          </span>{" "}
          {/* Mettre une vraie icône */}
        </div>
        {/* Placeholder pour menu burger (mobile) */}
        <button className={styles.menuToggle}>☰</button>
      </header>

      <div className={styles.widgetsGrid}>
        {/* Widget 1: Méditation */}
        <WidgetCard title="Méditation pour les développeurs">
          <p className={styles.widgetText}>
            Podcast, drepas quoiter natine foc gobers.
          </p>
          <span className={styles.widgetDuration}>10 minutes</span>
        </WidgetCard>

        {/* Widget 2: Mode Zen */}
        <WidgetCard title="Mode Zen Coding">
          <p className={styles.widgetText}>
            Réduire les distractions, chaque Wil ux code.
          </p>
          <button className={styles.widgetButton}>Active &gt;</button>
        </WidgetCard>

        {/* Widget 3: Sebattre / Focus */}
        <WidgetCard title="Sebattre" className={styles.focusWidget}>
          {" "}
          {/* Classe spécifique si besoin */}
          {/* Potentiellement une image de fond ici */}
          <p className={styles.widgetText}>Focus session, de ficcus</p>
          <span className={styles.widgetDuration}>9 minutes</span>
        </WidgetCard>

        {/* Widget 4: Analyse Productivité */}
        <WidgetCard title="Analyse de productivité">
          {/* Ici irait un composant de graphique */}
          <div className={styles.graphPlaceholder}>Graphique L M M J V S D</div>
        </WidgetCard>

        {/* Widget 5: Exercice respiration (détail) */}
        <WidgetCard title="Exercice de respiration">
          <div className={styles.breathingDetail}>
            <span className={styles.breathingIconPlaceholder}>◎</span>{" "}
            {/* Placeholder icône */}
            <span>Réinitialiser/Se recentrer</span>
            <span className={styles.breathingCount}>3 &gt;</span>
          </div>
          <div className={styles.habitTracker}>
            <span>Suivi des habitudes</span>
            <div className={styles.progressBar}>
              <div></div>
            </div>{" "}
            {/* Barre de progression simple */}
          </div>
        </WidgetCard>

        {/* Widget 6: Entraineur IA */}
        <WidgetCard
          title="Entraineur de méditation IA"
          className={styles.aiWidget}
        >
          <div className={styles.aiContent}>
            <img src="/scarab-placeholder.png" alt="Scarabée IA" width="60" />{" "}
            {/* Placeholder */}
            <p>Essayez une méditation guidée pour vous détendre</p>
          </div>
        </WidgetCard>

        {/* Widget 7 & 8: Citations */}
        <WidgetCard className={styles.quoteWidget}>
          <p>« Chaque ligne de code est un pas vers la sérénité »</p>
        </WidgetCard>
        <WidgetCard className={styles.quoteWidget}>
          <p>« Chaque ligne de code est un pas vers la sérénité »</p>
        </WidgetCard>
      </div>
    </div>
  );
};

export default Dashboard;
