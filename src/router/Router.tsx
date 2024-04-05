import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import AdminPage from "../pages/AdminPage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingFormPage from "../pages/BookingFormPage";
import { ShowSingleBooking } from "../components/ShowSingleBooking";
import { AdminPageValidation } from "../components/AdminPageValidation";
import { AdminCreateNewBooking } from "../components/AdminCreateNewBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <AdminPageValidation />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/booking/form",
        element: <BookingFormPage />,
      },
      {
        path: "/admin/:bookingId",
        element: <ShowSingleBooking />,
      },
      {
        path: "/admin/new-booking",
        element: <AdminCreateNewBooking />,
      },
    ],
  },
]);
