import React, { useState } from "react";
import styles from "./Home.module.scss";
import { ReactComponent as DemoSearch } from "./../assets/svg/demosearch.svg";
import { Api } from "./../service/api.ts";
import TicketResult from "./../components/TicketResult/TicketResult.tsx";

function Home() {
  const [clickedSearch, setClickedSearch] = useState<boolean>(false);
  const [allTickets, setAllTickets] = useState([]);

  const getTickets = async () => {
    if (clickedSearch) return;
    setClickedSearch(true);
    const tickets = await Api.getTickets();
    setAllTickets(tickets);
  };

  return (
    <div className={styles["kombo-search"]}>
      <div className={styles["search-container"]}>
        <DemoSearch onClick={getTickets} className={styles["demo-search"]} />
        <button onClick={getTickets} className={styles["mobile-button"]}>
          Search
        </button>
      </div>
      <div className={styles["tickets-container"]}>
        {allTickets.length > 0 ? (
          allTickets.map((ticket, index) => (
            <TicketResult key={index} ticket={ticket} />
          ))
        ) : (
          <p>{clickedSearch ? "Loading..." : "please click search"}</p>
        )}
      </div>
    </div>
  );
}

export default Home;
