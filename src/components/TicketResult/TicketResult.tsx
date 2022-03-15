import React from "react";
import { Ticket } from "../../types";
import styles from "./TicketResult.module.scss";
import { Link } from "react-router-dom";

import { ReactComponent as BusIcon } from "./../../assets/svg/transportTypes/bus.svg";
import { ReactComponent as TrainIcon } from "./../../assets/svg/transportTypes/train.svg";
import { ReactComponent as FlightIcon } from "./../../assets/svg/transportTypes/flight.svg";
import { ReactComponent as SncfLogo } from "./../../assets/svg/companies/sncf.svg";
import { ReactComponent as InouiLogo } from "./../../assets/svg/companies/inoui.svg";
import { ReactComponent as FlixbusLogo } from "./../../assets/svg/companies/flixbus.svg";
import { ReactComponent as AirfranceLogo } from "./../../assets/svg/companies/airfrance.svg";

const getIcon = (transportType: string) => {
  switch (transportType) {
    case "bus":
      return <BusIcon />;
    case "train":
      return <TrainIcon />;
    case "flight":
      return <FlightIcon />;
    default:
      return null;
  }
};

const getLogo = (company: string) => {
  switch (company) {
    case "sncf":
      return <SncfLogo />;
    case "inoui":
      return <InouiLogo />;
    case "flixbus":
      return <FlixbusLogo />;
    case "airfrance":
      return <AirfranceLogo />;
    default:
      return null;
  }
};

export default function TicketResult({ ticket }: { ticket: Ticket }) {
  if (!ticket) return null;

  const companies = ticket.trips.map((trip) => trip.companyName);

  const parseTime = (date: string) => {
    const time = new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };

  const firstTrip = ticket.trips[0];
  // const lastTrip = ticket.trips[ticket.trips.length - 1];

  // sample ways to use the data:
  // const price = Math.round(ticket.price) + " €";
  // const departureTime = parseTime(firstTrip.departure.time);
  // const arrivalTime = parseTime(lastTrip.arrival.time);

  return (
    <Link to="/ticket">
      <div className={styles["ticket"]}>
        <div>
          {/* we will always only display the first transport type */}
          {getIcon(firstTrip.transportType)}

          {/* we will always display all the companies */}
          {companies.map((company) => (
            <div key={company} className={styles["company-logo"]}>
              {getLogo(company)}
            </div>
          ))}
        </div>

        {/* its your job to make this pretty :) */}
        <p>{JSON.stringify(ticket)}</p>
      </div>
    </Link>
  );
}
