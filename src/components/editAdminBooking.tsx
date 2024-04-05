import React, { useState, useEffect } from "react";
import { IBooking, ICustomer } from "../types/interface";
import { DeleteBookingButton } from "./DeleteBookingButton";
import { updateBooking } from "../services/updateBooking";
import { updateCustomer } from "../services/updateCustomer";

interface IEditAdminBookingProps {
  booking: IBooking;
  customer: ICustomer;
  handleDelete: (bookingId: string) => void;
  changeEdit: () => void;
}

export const EditAdminBooking = (props: IEditAdminBookingProps) => {
  const [editedBooking, setEditedBooking] = useState<IBooking>(props.booking);
  const [editedCustomer, setEditedCustomer] = useState<ICustomer>(
    props.customer
  );

  useEffect(() => {
    setEditedBooking(props.booking);
    setEditedCustomer(props.customer);
  }, [props.booking, props.customer]);

  const handleBookingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedBooking({
      ...editedBooking,
      [name]: name === "numberOfGuests" ? parseInt(value, 10) : value,
    });
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
    console.log(editedCustomer);
  };

  async function handleEdit() {
    await updateBooking(editedBooking);
    await updateCustomer(editedCustomer);
    props.changeEdit();
  }

  return (
    <>
      <div className="single-booking-container__booking-id">
        <p>Booking id:</p>
        <p>{editedBooking._id}</p>
      </div>
      <div className="single-booking-container__name">
        <p>Customer name:</p>

        <input
          className="single-booking-container__input"
          type="text"
          name="name"
          value={editedCustomer.name}
          onChange={handleCustomerChange}
          placeholder="Niel"
        />

        <input
          className="single-booking-container__input"
          type="text"
          name="lastname"
          value={editedCustomer.lastname}
          onChange={handleCustomerChange}
          placeholder="Armstrong"
        />
      </div>
      <div className="single-booking-container__nr-of-guests">
        <p>Number of guests:</p>
        <input
          className="single-booking-container__input"
          type="number"
          name="numberOfGuests"
          value={editedBooking.numberOfGuests}
          onChange={handleBookingChange}
          placeholder="3"
        />
      </div>
      <div className="single-booking-container__time-date">
        <div className="single-booking-container__time-date__date">
          <p>Date:</p>

          <input
            className="single-booking-container__input"
            type="date"
            name="date"
            value={editedBooking.date}
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
                checked={editedBooking.time === "18:00"}
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
                checked={editedBooking.time === "21:00"}
                onChange={handleBookingChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="single-booking-container__email">
        <p>E-mail:</p>

        <input
          className="single-booking-container__input"
          type="email"
          name="email"
          pattern=".+@example\.com"
          value={editedCustomer.email}
          onChange={handleCustomerChange}
          placeholder="huston@weGotAProblem.gov"
        />
      </div>
      <div className="single-booking-container__tel">
        <p>Phonenumber:</p>

        <input
          className="single-booking-container__input"
          type="tel"
          name="phone"
          value={editedCustomer.phone}
          onChange={handleCustomerChange}
          placeholder="0123456789"
        />
      </div>

      <div className="single-booking-container__buttons">
        <>
          <button
            className="single-booking-container__buttons__edit-button"
            onClick={props.changeEdit}
          >
            Cancel
          </button>
          <button
            className="single-booking-container__buttons__save-button"
            onClick={handleEdit}
          >
            Save
          </button>
        </>

        <DeleteBookingButton
          bookingId={editedBooking._id}
          deleteBooking={props.handleDelete}
        />
      </div>
    </>
  );
};
