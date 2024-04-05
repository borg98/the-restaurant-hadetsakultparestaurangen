import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router'; 
import { BookingsProvider } from './contexts/BookingContexts';

function App() {
  return (
    <BookingsProvider>
    <RouterProvider router={router} />
    </BookingsProvider>
  );
}

export default App;
