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
import { parseTime, parsePrice } from '../../utils/display.ts';

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

export default function TicketResult({ ticket, index }: { ticket: Ticket, index: number }) {
  if (!ticket) return null;

  const companies = ticket.trips.map((trip) => trip.companyName);

  const firstTrip = ticket.trips[0];
  const lastTrip = ticket.trips[ticket.trips.length - 1];

  const price = parsePrice(ticket.price);
  const stops = [
    {
      time: parseTime(firstTrip.departure.time),
      city: firstTrip.departure.city,
      station: firstTrip.departure.station,
    },
    {
      time: parseTime(lastTrip.arrival.time),
      city: lastTrip.arrival.city,
      station: lastTrip.arrival.station,
    }
  ];

  return (
    <Link to={"/ticket/" + index} className={styles["link--no-decoration"]}>
      <div className={styles["ticket"]}>
        <div className={styles["logo-area"]}>
          <div className={styles["logo"]}>
            {getIcon(firstTrip.transportType)}
          </div>

          <div className={styles["company-logos"]}>
            {companies.map((company, index) => (
              <div key={index} className={styles["logo"]}>
                {getLogo(company)}
              </div>
            ))}
          </div>
        </div>

        <div className={styles["trips-card"]}>
          <div className={styles["stops"]}>
            {stops.map((stop, index) => (
              <div className={styles["stop"]} key={index}>
                <div className={styles["time"]}>
                  {stop.time}
                </div>
                <div className={styles["location"]}>
                  <span className={styles["city"]}>{stop.city}</span>
                  <span className={styles["station"]}>{stop.station}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["price"]}>
            {price}
          </div>
        </div>
      </div>
    </Link>
  );
}
