<script>
  import { enhance } from '$app/forms';

  // runes mode props
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

<h2>Login</h2>

<!-- SUCCESS MESSAGE -->
{#if form?.success && show}
  <div class="notice success">{form.message}</div>
{/if}

<!-- ERROR MESSAGE -->
{#if form?.error && show}
  <div class="notice error">{form.message}</div>
{/if}

<form method="POST" class="auth-form" use:enhance>
  <label>
    Email:
    <input type="email" name="email" required>
  </label>

  <label>
    Password:
    <input type="password" name="password" required>
  </label>

  <button type="submit" class="auth-btn">Login</button>
</form>

<style>
  h2 {
    color: var(--primary);
    margin-bottom: 20px;
  }

  /* Notification styles */
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

  .auth-form {
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

  .auth-btn {
    padding: 12px;
    background: var(--primary);
    color: var(--light);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
  }

  .auth-btn:hover {
    background: var(--secondary);
  }
</style>
