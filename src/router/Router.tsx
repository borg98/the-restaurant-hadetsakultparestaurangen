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
    path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/booking",
        element: <BookingPage />,
      },

      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/contact",
        element: <ContactPage />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/login",
        element: <AdminPageValidation />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/admin",
        element: <AdminPage />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/menu",
        element: <MenuPage />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/about",
        element: <AboutPage />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/booking/form",
        element: <BookingFormPage />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/admin/:bookingId",
        element: <ShowSingleBooking />,
      },
      {
        path: "https://borg98.github.io/the-restaurant-hadetsakultparestaurangen/admin/new-booking",
        element: <AdminCreateNewBooking />,
      },
    ],
  },
]);
