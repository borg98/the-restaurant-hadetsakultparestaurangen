import { useEffect, useState } from "react";
import { IBooking } from "../types/interface";
import { getBookings } from "../services/getBookings";
import { CheckDateInputs } from "./checkDateInputs";
import { DisplayBookings } from "./diplayBookings";
import "../style/checkBooking.scss";

export function CheckBookings() {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [dateIsSelected, setDateIsSelected] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [nrOfPeople, setNrOfPeople] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const retrivedBookings = await getBookings();
      setBookings(retrivedBookings);
    };

    getData();
  }, []);

  function checkDatesHandler(e: React.FormEvent) {
    e.preventDefault();
    setDateIsSelected(true);
    const dateInput = document.querySelector(
      "#bookingDate"
    ) as HTMLInputElement;
    const nrOfPeopleInput = document.querySelector(
      "#nrOfPeople"
    ) as HTMLInputElement;
    setSelectedDate(dateInput.value);
    setNrOfPeople(parseInt(nrOfPeopleInput.value));
    console.log(dateInput.value, nrOfPeopleInput.value);
  }

  return (
    <>
      <CheckDateInputs submitHandler={checkDatesHandler} />
      <div className="datesPickDateContainer">
        {dateIsSelected && nrOfPeople > 0 ? (
          <DisplayBookings
            bookings={bookings}
            date={selectedDate}
            nrOfPeople={nrOfPeople}
          />
        ) : (
          <p>Select a date to search for available seats</p>
        )}
      </div>
    </>
  );
}
