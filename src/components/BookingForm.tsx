import React, { useState, useEffect } from "react";
import { createBooking } from "../services/createBooking";
import { checkAvailableSeats } from "../services/checkAvailableSeats";
import { ICreateBooking, ICustomer } from "../types/interface";
import { useBookings } from "../contexts/BookingContexts";
import "../style/_BookingForm.scss";

interface BookingFormProps {
  selectedDate: string;
  selectedTime: string;
  numberOfGuests: number;
}

const BookingForm: React.FC<BookingFormProps> = ({
  selectedDate,
  selectedTime,
  numberOfGuests,
}) => {
  const { bookings, setBookings } = useBookings();

  const initialCustomerState: ICustomer = {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  };
  const initialBookingState: ICreateBooking = {
    restaurantId: "65ca017320b953116cfd8038",
    date: selectedDate,
    time: selectedTime,
    numberOfGuests,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
  };

  const [booking, setBooking] = useState<ICreateBooking>(initialBookingState);
  const [formMessage, setFormMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    setBooking((current) => ({ ...current, numberOfGuests }));
  }, [numberOfGuests]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "numberOfGuests") {
      setBooking((current) => ({ ...current, [name]: parseInt(value, 10) }));
    } else if (name in initialCustomerState) {
      setBooking((current) => ({
        ...current,
        customer: { ...current.customer, [name]: value },
      }));
    } else {
      setBooking((current) => ({ ...current, [name]: value }));
    }
  };

  const handleReset = () => {
    setBooking(initialBookingState);
    setErrorMessage("Your booking was canceled!");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const availability = checkAvailableSeats(bookings, booking.date);
    const availableSeats =
      booking.time === "18:00"
        ? availability.nrPeopleAt18
        : availability.nrPeopleAt21;

    if (booking.numberOfGuests > availableSeats) {
      setFormMessage("There are not enough available seats at the chosen time");
      return;
    }

    try {
      const newBooking = await createBooking(booking);
      console.log("Booking created successfully:", newBooking);
      setBookings((prev) => [...prev, newBooking]);
      setFormMessage("Your booking has been created! An order confirmation has been sent to your email.");
    } catch (error) {
      console.error("Error creating booking:", error);
      setErrorMessage(
        "The booking could not be created. Please try again later."
      );
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Date:</label>
            <input className="form-input" type="date" name="date" value={booking.date} disabled />
          </div>
          <label className="form-label" htmlFor="time">
            Time:
          </label>
          <select
            id="time"
            name="time"
            value={booking.time}
            disabled
            className="form-select"
          >
            <option value="18:00">18:00</option>
            <option value="21:00">21:00</option>
          </select>
          <div className="form-group">
            <label className="form-label">Number of guests:</label>
            <input
              className="form-input"
              type="text"
              name="numberOfGuests"
              min="1"
              max="6"
              value={booking.numberOfGuests}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={booking.customer.name}
              onChange={handleInputChange}required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Lastname:</label>
            <input
              className="form-input"
              type="text"
              name="lastname"
              value={booking.customer.lastname}
              onChange={handleInputChange}required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={booking.customer.email}
              onChange={handleInputChange}required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone:</label>
            <input
              className="form-input"
              type="tel"
              name="phone"
              value={booking.customer.phone}
              onChange={handleInputChange} required
            />
          </div>
          <div className="form-actions">
            <button className="submit-btn" type="submit">
              Book
            </button>
            <button className="reset-btn" type="button" onClick={handleReset}>
              Cancel
            </button>
            <p className="cookies">
              I hope this message finds you well. As an organization, we are
              committed to protecting your privacy and personal data. To ensure
              that we are in compliance with the General Data Protection
              Regulation (GDPR), we kindly ask for your consent to collect,
              process, and store your personal information.{" "}
              <input type="checkbox" required />
            </p>
          </div>
          {errorMessage && <p className="form-error-message">{errorMessage}</p>}
          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>
      </div>
      <div className="text-for-booking-container">
        <div className="h2-booking">
          Experience the flavors of space with every bite - book your seat now!
        </div>
        <div className="booking-text">
          {" "}
          The culinary adventure of the universe!
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

