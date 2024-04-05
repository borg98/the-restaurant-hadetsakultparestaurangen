import { CheckBookings } from "../components/checkBookings";
import React from 'react';
import '../style/_BookingPage.scss';

const BookingPage: React.FC = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="booking-video">
        <source src="/restaurant_-_3152 (720p).mp4" type="video/mp4" />
      </video>
      <div className="booking-wrapper"> 
        <CheckBookings />
      </div>
    </div>
  );
};

export default BookingPage;



