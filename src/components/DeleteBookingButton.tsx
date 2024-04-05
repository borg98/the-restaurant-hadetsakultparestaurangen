import "../style/deleteBookingButton.scss";

interface DeleteBookingButtonProps {
  bookingId: string;
  deleteBooking: (bookingId: string) => void;
}

export function DeleteBookingButton(props: DeleteBookingButtonProps) {
  return (
    <div className="delete-booking-button-container">
      <button
        className="delete-booking-button-container__button"
        onClick={() => {
          props.deleteBooking(props.bookingId);
        }}
      >
        Delete
      </button>
    </div>
  );
}
