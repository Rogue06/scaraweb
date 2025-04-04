// src/layouts/MainLayout/MainLayout.jsx
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./MainLayout.module.css"; // Import CSS Modules

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.contentArea}>{children}</main>
    </div>
  );
};

export default MainLayout;
