<h2>Book Your Event</h2>

<p class="intro">
  Ready to bring the party to your venue? Fill out the form below and our team will get back to you with availability, pricing, and setup details.
</p>

<form method="POST" class="booking-form">
  <label>
    Your Name:
    <input type="text" name="name" required>
  </label>

  <label>
    Email Address:
    <input type="email" name="email" required>
  </label>

  <label>
    Event Type:
    <select name="type" required>
      <option>Birthday Party</option>
      <option>Wedding</option>
      <option>Corporate Event</option>
      <option>Community Event</option>
      <option>Private Party</option>
    </select>
  </label>

  <label>
    Event Date:
    <input type="date" name="date" required>
  </label>

  <label>
    Additional Details:
    <textarea name="details" rows="4"></textarea>
  </label>

  <button type="submit" class="submit-btn">Submit Booking</button>
</form>

<style>
  h2 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .intro {
    margin-bottom: 20px;
  }

  .booking-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: #fafafa;
    padding: 25px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }

  input, select, textarea {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .submit-btn {
    padding: 12px;
    background: var(--primary);
    color: var(--light);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
  }

  .submit-btn:hover {
    background: var(--secondary);
  }
</style>
