import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IBooking, ICustomer } from '../types/interface';

interface BookingsContextType {
  bookings: IBooking[];
  setBookings: React.Dispatch<React.SetStateAction<IBooking[]>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  numberOfGuests: number;
  setNumberOfGuests: React.Dispatch<React.SetStateAction<number>>;
  customer: ICustomer;
  setCustomer: React.Dispatch<React.SetStateAction<ICustomer>>;
}

const initialState: BookingsContextType = {
  bookings: [],
  setBookings: () => {},
  selectedDate: '',
  setSelectedDate: () => {},
  selectedTime: '',
  setSelectedTime: () => {},
  numberOfGuests: 1, 
  setNumberOfGuests: () => {},
  customer: { _id:'', name: '', lastname: '', email: '', phone: '' },
  setCustomer: () => {},
};

const BookingsContext = createContext<BookingsContextType>(initialState);

export const useBookings = () => useContext(BookingsContext);

interface ProviderProps {
  children: ReactNode;
}

export const BookingsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const [customer, setCustomer] = useState<ICustomer>(initialState.customer);

  const value: BookingsContextType = {
    bookings,
    setBookings,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    numberOfGuests,
    setNumberOfGuests,
    customer,
    setCustomer,
  };

  return (
    <BookingsContext.Provider value={value}>
      {children}
    </BookingsContext.Provider>
  );
};
