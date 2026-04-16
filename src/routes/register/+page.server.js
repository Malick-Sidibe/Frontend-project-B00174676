// src/routes/register/+page.server.js
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Registration received:", { name, email, password });

    return {
      success: true,
      message: "Registration submitted successfully!"
    };
  }
};
