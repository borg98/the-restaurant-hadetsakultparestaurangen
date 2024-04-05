import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IBooking, ICustomer } from "../types/interface";
import { getSingleBooking } from "../services/getSingleBooking";
import { getCustomer } from "../services/getCustomer";
import "../style/showSingleBooking.scss";
import { deleteBooking } from "../services/deleteBooking";
import { EditAdminBooking } from "./editAdminBooking";

export function ShowSingleBooking() {
  const [booking, setBooking] = useState<IBooking>();
  const [customer, setCustomer] = useState<ICustomer>();
  const [edit, setEdit] = useState<boolean>(false);
  const { bookingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    if (bookingId) {
      const retrivedBooking = await getSingleBooking(bookingId);
      setBooking(retrivedBooking[0]);

      const retrivedCustomer = await getCustomer(retrivedBooking[0].customerId);
      setCustomer(retrivedCustomer[0]);
    } else {
      console.log("No bookingId");
    }
  };

  async function handleDelete(bookingId: string) {
    await deleteBooking(bookingId);
    getData();
    navigate("/admin");
  }

  function changeEditState() {
    if (edit) {
      getData();
    }
    setEdit(!edit);
  }

  return (
    <>
      <div className="single-booking-wrapper">
        <div className="single-booking-container">
          {!edit && (
            <>
              <div className="single-booking-container__booking-id">
                <p className="single-booking-container__booking-id__title">
                  Booking id:
                </p>
                <p className="single-booking-container__booking-id__value">
                  {booking?._id}
                </p>
              </div>
              <div className="single-booking-container__name">
                <p>Customer name:</p>
                <p>{customer?.name}</p>
                <p>{customer?.lastname}</p>
              </div>
              <div className="single-booking-container__nr-of-guests">
                <p>Number of guests:</p>
                <p>{booking?.numberOfGuests}</p>
              </div>
              <div className="single-booking-container__time-date">
                <div className="single-booking-container__time-date__date">
                  <p>Date:</p>
                  <p>{booking?.date}</p>
                </div>
                <div className="single-booking-container__time-date__time">
                  <p>Time:</p>
                  <p>{booking?.time}</p>
                </div>
              </div>
              <div className="single-booking-container__email">
                <p>E-mail:</p>

                {customer?.email ? (
                  <a
                    className="single-booking-container__email__link"
                    href={`mailto:${customer?.email}`}
                  >
                    {customer?.email}
                  </a>
                ) : (
                  <p>None</p>
                )}
              </div>
              <div className="single-booking-container__tel">
                <p>Phonenumber:</p>

                {customer?.phone ? (
                  <a
                    className="single-booking-container__tel__link"
                    href={`tel:${customer?.phone}`}
                  >
                    {customer?.phone}
                  </a>
                ) : (
                  <p>None</p>
                )}
              </div>
              <div className="single-booking-container__buttons">
                <button
                  onClick={() => {
                    navigate("/admin");
                  }}
                  className="single-booking-container__buttons__back-button"
                >
                  Back
                </button>
                <button
                  className="single-booking-container__buttons__edit-button"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  Change booking
                </button>
              </div>
            </>
          )}
          {edit && booking && customer && (
            <EditAdminBooking
              booking={booking}
              customer={customer}
              handleDelete={handleDelete}
              changeEdit={changeEditState}
            />
          )}
        </div>
      </div>
    </>
  );
}
