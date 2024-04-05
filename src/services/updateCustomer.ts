import axios from "axios";
import { ICustomer } from "../types/interface";

interface ApiCustomer {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

export async function updateCustomer(customer: ICustomer) {
  const apiBooking: ApiCustomer = {
    id: customer._id,
    name: customer.name,
    lastname: customer.lastname,
    email: customer.email,
    phone: customer.phone,
  };

  try {
    const response = await axios.put<ICustomer>(
      `https://school-restaurant-api.azurewebsites.net/customer/update/${customer._id}`,
      apiBooking
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Nu blev det fel igen:", error);
    throw error;
  }
}
