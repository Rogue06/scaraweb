// src/App.jsx
import React from "react";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        {/* Ajoutez d'autres routes ici */}
        {/* <Route path="/meditations" element={<MainLayout><MeditationsPage /></MainLayout>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
