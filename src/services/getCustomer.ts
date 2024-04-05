import axios from "axios";
import { ICustomer } from "../types/interface";

export function getCustomer(customerId: string) {
  const response = axios
    .get<ICustomer[]>(
      `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
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
