export type Trip = {
  transportType: "train" | "bus" | "flight";
  companyName: string;
  departure: {
    city: string;
    station: string;
    time: string; // comes from Date on backend
  };
  arrival: {
    city: string;
    station: string;
    time: string; // comes from Date on backend
  };
};

export type Ticket = {
  price: number;
  trips: Trip[];
};
