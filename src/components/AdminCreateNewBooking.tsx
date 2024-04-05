import React, { useState } from "react";
import { ICreateBooking } from "../types/interface";
import { useNavigate } from "react-router-dom";
import "../style/showSingleBooking.scss";
import { createBooking } from "../services/createBooking";

export function AdminCreateNewBooking() {
  const navigator = useNavigate();

  const initialCustomerState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  };
  const initialBookingState: ICreateBooking = {
    restaurantId: "65ca017320b953116cfd8038",
    date: "",
    time: "18:00",
    numberOfGuests: 1,
    customer: initialCustomerState,
  };

  const [newBooking, setNewBooking] = useState<ICreateBooking>({
    ...initialBookingState,
    customer: initialCustomerState,
  });

  const handleBookingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      customer: {
        ...prevBooking.customer,
        [name]: value,
      },
    }));
  };

  async function handleEdit(
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    await createBooking(newBooking);
    console.log(newBooking);

    alert("Booking created");

    navigator("/admin");
  }

  return (
    <>
      <div className="single-booking-wrapper">
        <div className="single-booking-container">
          <form action="" onSubmit={handleEdit}>
            <div className="single-booking-container__name">
              <p>Customer name:</p>

              <input
                required
                className="single-booking-container__input"
                type="text"
                name="name"
                value={newBooking.customer.name}
                onChange={handleCustomerChange}
                placeholder="Niel"
              />

              <input
                required
                className="single-booking-container__input"
                type="text"
                name="lastname"
                value={newBooking.customer.lastname}
                onChange={handleCustomerChange}
                placeholder="Armstrong"
              />
            </div>
            <div className="single-booking-container__nr-of-guests">
              <p>Number of guests:</p>
              <input
                required
                className="single-booking-container__input"
                type="number"
                name="numberOfGuests"
                min={1}
                max={90}
                value={newBooking.numberOfGuests}
                onChange={handleBookingChange}
                placeholder="3"
              />
            </div>
            <div className="single-booking-container__time-date">
              <div className="single-booking-container__time-date__date">
                <p>Date:</p>

                <input
                  required
                  className="single-booking-container__input"
                  type="date"
                  name="date"
                  value={newBooking.date}
                  onChange={handleBookingChange}
                  placeholder="1969-09-13"
                />
              </div>

              <div className="single-booking-container__time-date__time">
                <p>Time:</p>

                <div className="single-booking-container__time-date__time__time-select">
                  <div className="single-booking-container__time-date__time__time-select__check">
                    <label htmlFor="check18">18:00</label>
                    <input
                      id="check18"
                      type="checkbox"
                      name="time"
                      value="18:00"
                      checked={newBooking.time === "18:00"}
                      onChange={handleBookingChange}
                    />
                  </div>
                  <div className="single-booking-container__time-date__time__time-select__check">
                    <label htmlFor="check21">21:00</label>
                    <input
                      id="check21"
                      type="checkbox"
                      name="time"
                      value="21:00"
                      checked={newBooking.time === "21:00"}
                      onChange={handleBookingChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-booking-container__email">
              <p>E-mail:</p>

              <input
                required
                className="single-booking-container__input"
                type="email"
                name="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                value={newBooking.customer.email}
                onChange={handleCustomerChange}
                placeholder="huston@weGotAProblem.gov"
              />
            </div>
            <div className="single-booking-container__tel">
              <p>Phonenumber:</p>

              <input
                required
                className="single-booking-container__input"
                type="tel"
                name="phone"
                value={newBooking.customer.phone}
                onChange={handleCustomerChange}
                placeholder="0123456789"
              />
            </div>

            <div className="single-booking-container__buttons">
              <>
                <button
                  className="single-booking-container__buttons__edit-button"
                  onClick={() => {
                    navigator("/admin");
                  }}
                >
                  Cancel
                </button>
                <button
                  className="single-booking-container__buttons__save-button"
                  type="submit"
                >
                  Save
                </button>
              </>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
