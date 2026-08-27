import { API_URL } from "../lib/api";

export async function createBooking(
  camperId: string,
  name: string,
  email: string,
) {
  const response = await fetch(
    `${API_URL}/campers/${camperId}/booking-requests`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Booking failed");
  }

  return response.json();
}