import axios from "axios";
import { IBooking } from "../types/interface";

export function getSingleBooking(bookingId: string) {
  const response = axios
    .get<IBooking[]>(
      `https://school-restaurant-api.azurewebsites.net/booking/${bookingId}`
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
