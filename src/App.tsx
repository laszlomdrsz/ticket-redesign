import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import styles from "./index.module.scss";
import Home from "./pages/Home.tsx";
import TicketInfo from "./pages/TicketInfo.tsx";
import { Api } from "./service/api.ts";
import { Ticket } from "./types.ts";

export const AllTicketsContext = React.createContext<Ticket[]>([]);

function App() {
  const [allTickets, setAllTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, [])

  const getTickets = async () => {
    const tickets = await Api.getTickets();
    setAllTickets(tickets);
  };

  return (
    <AllTicketsContext.Provider value={allTickets}>
      <HashRouter>
        <Header />
        <div className={styles["kombo-content"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ticket" element={<TicketInfo />} />
          </Routes>
        </div>
      </HashRouter>
    </AllTicketsContext.Provider>
  );
}

export default App;
