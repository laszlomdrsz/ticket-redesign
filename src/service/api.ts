import axiosLib from "axios";
import { Ticket } from "../types";

const axios = axiosLib.create({
  baseURL: "//kombo-hiring.herokuapp.com/api/v1",
  timeout: 60000,
});

export const Api = {
  async getTickets(): Promise<Ticket[]> {
    const response = await axios.get<Ticket[]>("/tickets");
    return response.data;
  },
};
