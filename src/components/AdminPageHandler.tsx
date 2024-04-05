import { useNavigate } from "react-router-dom";
import { IAdminPageBooking } from "../types/interface";
import { AdminBookingTN } from "./AdminBookingTN";
import { useState } from "react";

interface IAdminPageHandlerProps {
  bookings: IAdminPageBooking[];
  deleteBooking: (bookingId: string) => void;
}

export function AdminPageHandler(props: IAdminPageHandlerProps) {
  const navigate = useNavigate();
  const [sortedBookings, setSortedBookings] = useState<IAdminPageBooking[]>(
    props.bookings
  );

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortedArray = [...props.bookings];

    if (e.target.value === "date") {
      sortedArray.sort((a, b) => a.booking.date.localeCompare(b.booking.date));
    } else if (e.target.value === "name") {
      sortedArray.sort((a, b) =>
        a.customer.name.localeCompare(b.customer.name)
      );
    } else if (e.target.value === "time") {
      sortedArray.sort((a, b) => {
        const timeA =
          typeof a.booking.time === "string"
            ? a.booking.time.split(":").map(Number)
            : [0];
        const timeB =
          typeof b.booking.time === "string"
            ? b.booking.time.split(":").map(Number)
            : [0];
        const timeAValue = timeA[0];
        const timeBValue = timeB[0];

        return timeAValue - timeBValue;
      });
    }

    setSortedBookings(sortedArray);
  }

  return (
    <div className="admin-bookings">
      <div className="admin-bookings__admin-banner">
        <h3 className="admin-bookings__title">Admin</h3>
      </div>

      <div className="admin-bookings__menu">
        <select
          className="admin-bookings__menu__select"
          name="bookingSort"
          id="bookingSort"
          onChange={handleSortChange}
        >
          <option value="sort">Default sort</option>
          <option value="date">Date</option>
          <option value="name">Name</option>
          <option value="time">Time</option>
        </select>
        <button
          className="admin-bookings__menu__new-booking-button"
          onClick={() => {
            navigate("/admin/new-booking");
          }}
        >
          Create new booking
        </button>
      </div>
      {sortedBookings.map((booking, i) => {
        return (
          <AdminBookingTN
            booking={booking.booking}
            customer={booking.customer}
            deleteBooking={props.deleteBooking}
            key={i}
          />
        );
      })}
    </div>
  );
}
