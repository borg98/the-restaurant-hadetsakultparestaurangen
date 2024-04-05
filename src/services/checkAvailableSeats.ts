import { IBooking } from "../types/interface";

export function checkAvailableSeats(
  bookings: IBooking[],
  date: string
): { nrPeopleAt18: number; nrPeopleAt21: number } {
  const totalBookings = bookings.filter((booking) => booking.date === date);
  const totalAt18 = totalBookings.filter((booking) => booking.time === "18:00");
  const totalAt21 = totalBookings.filter((booking) => booking.time === "21:00");
  const nrPeopleAt18 =
    90 - totalAt18.reduce((acc, booking) => acc + booking.numberOfGuests, 0);
  const nrPeopleAt21 =
    90 - totalAt21.reduce((acc, booking) => acc + booking.numberOfGuests, 0);

  return { nrPeopleAt18, nrPeopleAt21 };
}
