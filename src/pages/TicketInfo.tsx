import React, { useContext, useEffect, useState } from "react";
import styles from "./TicketInfo.module.scss";
import { ReactComponent as FlightIcon } from "./../assets/svg/transportTypes/flight.svg";
import { ReactComponent as AirFranceLogo } from "./../assets/svg/companies/airfrance.svg";
import { useParams } from 'react-router-dom';
import { Ticket } from '../types.ts';
import { AllTicketsContext } from '../App.tsx';
import { parsePrice, parseTime, parseDate } from '../utils/display.ts';

export default function TicketInfo() {
  const {index} = useParams();
  const allTickets = useContext<Ticket[]>(AllTicketsContext);
  const [ticket, setTicket] = useState<Ticket | undefined>();

  useEffect(() => {
    setTicket(allTickets[index]);
  }, [allTickets, index]);

  if (!ticket) {
    return (<p>Invalid URL</p>);
  }

  const firstTrip = ticket.trips[0];
  const lastTrip = ticket.trips[ticket.trips.length - 1];
  
  const price = parsePrice(ticket?.price);
  const date = parseDate(firstTrip.departure.time);
  const departureTime = parseTime(firstTrip.departure.time);
  const departureCity = firstTrip.departure.city;
  const departureStation = firstTrip.departure.station;
  const arrivalTime = parseTime(lastTrip.arrival.time);
  const arrivalCity = lastTrip.arrival.city;
  const arrivalStation = lastTrip.arrival.station;

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
