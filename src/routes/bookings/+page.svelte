<script>
  import { enhance } from '$app/forms';

  const { form } = $props();

  // FIX: reactive state must use $state()
  let show = $state(true);

  // FIX: reactive block replaced with $effect()
  $effect(() => {
    if (form?.success || form?.error) {
      show = true;
      setTimeout(() => (show = false), 3000);
    }
  });
</script>

<h2>Book a Session</h2>

{#if form?.success && show}
  <div class="notice success">{form.message}</div>
{/if}

{#if form?.error && show}
  <div class="notice error">{form.message}</div>
{/if}

<form method="POST" class="booking-form" use:enhance>
  <label>
    Name:
    <input type="text" name="name" required>
  </label>

  <label>
    Email:
    <input type="email" name="email" required>
  </label>

  <label>
    Date:
    <input type="date" name="date" required>
  </label>

  <label>
    Time:
    <input type="time" name="time" required>
  </label>

  <label>
    Group Size:
    <input type="number" name="groupSize" min="1" required>
  </label>

  <button type="submit" class="booking-btn">Submit Booking</button>
</form>

<style>
  h2 {
    color: var(--primary);
    margin-bottom: 20px;
  }

  .notice {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .success {
    background: #d4ffd4;
    border: 1px solid #2a8a2a;
  }

  .error {
    background: #ffd4d4;
    border: 1px solid #8a2a2a;
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
  }

  input {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .booking-btn {
    padding: 12px;
    background: var(--primary);
    color: var(--light);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
  }

  .booking-btn:hover {
    background: var(--secondary);
  }
</style>
