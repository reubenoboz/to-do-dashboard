import React from "react";
import "./app.module.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import styles from "./app.module.css"

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className={styles.main}>
        <Dashboard />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
