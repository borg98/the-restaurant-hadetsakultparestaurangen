
import axios from "axios";
import { IBooking } from "../types/interface";

interface ICreateBookingData {
  restaurantId:string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
  };
}
export const createBooking = async (bookingData: ICreateBookingData) => {
  try {
    const response = await axios.post<IBooking>(
      "https://school-restaurant-api.azurewebsites.net/booking/create",
      bookingData,
      {
        headers: {
          'Content-Type': 'application/json',
          
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating booking:');
    throw error;
  }
};


