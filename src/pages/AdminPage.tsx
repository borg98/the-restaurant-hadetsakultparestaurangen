import { useEffect, useState } from "react";
import { getBookings } from "../services/getBookings";
import { IAdminPageBooking } from "../types/interface";
import { AdminPageHandler } from "../components/AdminPageHandler";
import { getCustomer } from "../services/getCustomer";
import { deleteBooking } from "../services/deleteBooking";
import { LoadingBookings } from "../components/LoadingBookings";

const AdminPage = () => {
  const [adminBookings, setAdminBookings] = useState<IAdminPageBooking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const retrivedBookings = await getBookings();
      const retrivedCustomers = await Promise.all(
        retrivedBookings.map((booking) => getCustomer(booking.customerId))
      );
      setAdminBookings(
        retrivedBookings.map((booking, i) => {
          return { booking, customer: retrivedCustomers[i][0] };
        })
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  async function handleDelete(bookingId: string) {
    await deleteBooking(bookingId);
    getData();
  }

  return (
    <>
      {loading ? (
        <LoadingBookings />
      ) : (
        <AdminPageHandler
          bookings={adminBookings}
          deleteBooking={handleDelete}
        />
      )}
    </>
  );
};

export default AdminPage;
