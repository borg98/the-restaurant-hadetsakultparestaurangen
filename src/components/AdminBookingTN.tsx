import { IBooking, ICustomer } from "../types/interface";
import "../style/adminBookingTN.scss";
import { useNavigate } from "react-router-dom";

interface IAdminBookingTNProps {
  booking: IBooking;
  customer: ICustomer;
  deleteBooking: (bookingId: string) => void;
}

export function AdminBookingTN(props: IAdminBookingTNProps) {
  const navigate = useNavigate();

  return (
    <div className="admin-booking-container">
      <h3 className="admin-booking-container__name">{props.customer.name}</h3>
      <p className="admin-booking-container__time">
        Time: {props.booking.time}
      </p>
      <p className="admin-booking-container__nr-of-guests">
        Nr of guests: {props.booking.numberOfGuests}
      </p>

      <button
        className="admin-booking-container__view-booking-button"
        onClick={() => {
          navigate(`/admin/${props.booking._id}`);
        }}
      >
        More details
      </button>
    </div>
  );
}
