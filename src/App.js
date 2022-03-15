import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import styles from "./index.module.scss";
import Home from "./pages/Home.tsx";
import TicketInfo from "./pages/TicketInfo.tsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <div className={styles["kombo-content"]}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ticket" element={<TicketInfo />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
