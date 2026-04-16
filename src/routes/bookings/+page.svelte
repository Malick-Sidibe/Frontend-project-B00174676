<h2>Book a Room</h2>

<p class="intro">
  Reserve your private karaoke room in just a few clicks. Choose your date, time, and group size — we’ll handle the rest.
</p>

<form method="POST" class="booking-form">
  <label>
    Name:
    <input name="name" type="text" placeholder="Enter your name" required />
  </label>

  <label>
    Email:
    <input name="email" type="email" placeholder="Enter your email" required />
  </label>

  <label>
    Date:
    <input name="date" type="date" required />
  </label>

  <label>
    Time:
    <input name="time" type="time" required />
  </label>

  <label>
    Group Size:
    <input name="groupSize" type="number" min="1" max="20" required />
  </label>

  <button type="submit">Confirm Booking</button>
</form>

<style>
  h2 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .intro {
    margin-bottom: 25px;
  }

  .booking-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 450px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-top: 5px;
  }

  button {
    background: var(--secondary);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    opacity: 0.9;
  }
</style>
