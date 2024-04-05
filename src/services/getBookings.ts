import axios from "axios";
import { IBooking } from "../types/interface";

export function getBookings() {
  const response = axios
    .get<IBooking[]>(
      "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65ca017320b953116cfd8038"
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Nu blev det fel igen:", error);
      throw error;
    });

  return response;
}
