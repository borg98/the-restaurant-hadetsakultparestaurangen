export interface IAdress {
  street: string;
  zip: string;
  city: string;
}

export interface IRestaurant {
  id: string;
  name: string;
  adress: IAdress;
}

export interface IBooking {
  _id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}

export interface ICustomer {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface IAdminPageBooking {
  booking: IBooking;
  customer: ICustomer;
}

export interface ICreateBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
  };
}

export interface BookingFormProps {
  selectedDate: string;
  selectedTime: string;
  onBookingSuccess: () => void;
}
