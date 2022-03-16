import React, { useContext, useState } from "react";
import styles from "./Home.module.scss";
import { ReactComponent as DemoSearch } from "./../assets/svg/demosearch.svg";
import TicketResult from "./../components/TicketResult/TicketResult.tsx";
import { AllTicketsContext } from '../App.tsx';
import { Ticket } from "../types.ts";

function Home() {
  const [clickedSearch, setClickedSearch] = useState<boolean>(false);
  const allTickets = useContext<Ticket[]>(AllTicketsContext);
  
  const showTickets = async () => {
    setClickedSearch(true);
  };

  return (
    <div className={styles["kombo-search"]}>
      <div className={styles["search-container"]}>
        <DemoSearch onClick={showTickets} className={styles["demo-search"]} />
        <button onClick={showTickets} className={styles["mobile-button"]}>
          Search
        </button>
      </div>
      <div className={styles["tickets-container"]}>
        {allTickets.length > 0 && clickedSearch ? (
          allTickets.map((ticket, index) => (
            <TicketResult key={index} ticket={ticket} index={index} />
          ))
        ) : (
          <p>{clickedSearch ? "Loading..." : "please click search"}</p>
        )}
      </div>
    </div>
  );
}

export default Home;
