import '../style/_BookingFormPage.scss';
import { useBookings } from '../contexts/BookingContexts';
import BookingForm from '../components/BookingForm';



 const BookingFormPage = () => {
  const { selectedDate, selectedTime, numberOfGuests  } = useBookings();
  
    return (
      <div>
        <div className='container-booking-form-page'>      
        <BookingForm selectedDate={selectedDate} 
        selectedTime={selectedTime} 
        numberOfGuests={numberOfGuests} />       
        </div>
      </div>
    );
  };
  
  export default BookingFormPage;
