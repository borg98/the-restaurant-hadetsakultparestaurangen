import axios from "axios";
import { IBooking } from "../types/interface";

interface ApiBooking {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}

export async function updateBooking(booking: IBooking) {
  const apiBooking: ApiBooking = {
    id: booking._id,
    restaurantId: booking.restaurantId,
    date: booking.date,
    time: booking.time,
    numberOfGuests: booking.numberOfGuests,
    customerId: booking.customerId,
  };

  try {
    const response = await axios.put<IBooking>(
      `https://school-restaurant-api.azurewebsites.net/booking/update/${booking._id}`,
      apiBooking
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Nu blev det fel igen:", error);
    throw error;
  }
}
