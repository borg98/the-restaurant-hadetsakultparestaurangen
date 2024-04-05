import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { checkAvailableSeats } from "../services/checkAvailableSeats";
import { IBooking } from "../types/interface";
import "../style/displayBookings.scss";
import { useBookings } from "../contexts/BookingContexts";

interface DisplayBookingsProps {
  bookings: IBooking[];
  date: string;
  nrOfPeople: number;
}

export function DisplayBookings(props: DisplayBookingsProps) {
  const [availableAt18, setAvailableAt18] = useState<boolean>(true);
  const [availableAt21, setAvailableAt21] = useState<boolean>(true);
  const navigate = useNavigate();
  const { setSelectedDate, setSelectedTime, setNumberOfGuests } = useBookings();

  const availableSeats = useMemo(
    () => checkAvailableSeats(props.bookings, props.date),
    [props.bookings, props.date]
  );

  useEffect(() => {
    setAvailableAt18(props.nrOfPeople <= availableSeats.nrPeopleAt18);
    setAvailableAt21(props.nrOfPeople <= availableSeats.nrPeopleAt21);
  }, [props.nrOfPeople, availableSeats]);

  const handleBookingClick = (time: string, nrOfPeople: number) => {
    setSelectedDate(props.date);
    setSelectedTime(time);
    setNumberOfGuests(nrOfPeople);
    navigate("/booking/form");
  };

  return (
    <>
      <div className="dateContainer">
        <h3>{props.date}</h3>
        {availableAt18 && (
          <div className="timeButtonContainer">
            <p>18:00</p>
            <p>Available Seats: {availableSeats.nrPeopleAt18}</p>
            <button
              onClick={() => handleBookingClick("18:00", props.nrOfPeople)}
            >
              Book 18:00
            </button>
          </div>
        )}
        {availableAt21 && (
          <div className="timeButtonContainer">
            <p>21:00</p>
            <p>Available Seats: {availableSeats.nrPeopleAt21}</p>
            <button
              onClick={() => handleBookingClick("21:00", props.nrOfPeople)}
            >
              Book 21:00
            </button>
          </div>
        )}
        {props.nrOfPeople > 90 && <p>Max 90 personer</p>}
        {!availableAt18 && props.nrOfPeople < 91 && (
          <p>No more seats at 18:00</p>
        )}
        {!availableAt21 && props.nrOfPeople < 91 && (
          <p>No more seats at 21:00</p>
        )}
      </div>
    </>
  );
}
