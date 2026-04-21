// src/routes/login/+page.server.js
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Login received:", { email, password });

    // Example validation (you can change this)
    if (!email || !password) {
      return {
        error: true,
        message: "Please fill in all fields."
      };
    }

    return {
      success: true,
      message: "Login submitted successfully!"
    };
  }
};
