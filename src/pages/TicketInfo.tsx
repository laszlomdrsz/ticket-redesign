import React from "react";
import styles from "./TicketInfo.module.scss";
import { ReactComponent as FlightIcon } from "./../assets/svg/transportTypes/flight.svg";
import { ReactComponent as AirFranceLogo } from "./../assets/svg/companies/airfrance.svg";

export default function TicketInfo() {
  // get this information from the ticket that the user selected.
  const price = "485,00 €";
  const date = "Fri, 27 Aug";
  const departureTime = "7:00";
  const departureCity = "Aéroport Barcelone-El Prat";
  const departureStation = "Barcelona–El Prat Airport, BCN";
  const arrivalTime = "13:30";
  const arrivalCity = "Aéroport Lisbonne Humberto Delgado";
  const arrivalStation = "Lisbon Portela Airport, LIS";

  return (
    <div className={styles["ticket-info"]}>
      <div className={styles["ticket"]}>
        <div className={styles["date"]}>{date}</div>
        {/* keep in mind, trip should be repeated for the number of trips on the ticket */}
        <div className={styles["trip"]}>
          <div className={styles["departure"]}>
            <p className={styles["time"]}>{departureTime}</p>
            <div className={styles["location"]}>
              <p className={styles["city"]}>{departureCity}</p>
              <p className={styles["station"]}>{departureStation}</p>
            </div>
          </div>
          <div className={styles["transport-type"]}>
            <FlightIcon />
            <AirFranceLogo />
          </div>
          <div className={styles["arrival"]}>
            <p className={styles["time"]}>{arrivalTime}</p>
            <div className={styles["location"]}>
              <p className={styles["city"]}>{arrivalCity}</p>
              <p className={styles["station"]}>{arrivalStation}</p>
            </div>
          </div>
        </div>
        <div className={styles["price"]}>Total Price: {price}</div>
      </div>
    </div>
  );
}
