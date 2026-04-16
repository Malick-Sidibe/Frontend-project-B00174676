// src/routes/bookings/+page.server.js
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const date = formData.get("date");
    const time = formData.get("time");
    const groupSize = formData.get("groupSize");

    console.log("Booking received:", { name, email, date, time, groupSize });

    return {
      success: true,
      message: "Booking submitted successfully!"
    };
  }
};
