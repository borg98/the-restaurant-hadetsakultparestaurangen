import axios from "axios";

export async function deleteBooking(bookingId: string) {
  await axios
    .delete(
      `https://school-restaurant-api.azurewebsites.net/booking/delete/${bookingId}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error) {
        alert("Bokningen finns inte");
      }
    });
}
