<h2>Login</h2>

<form method="POST" class="auth-form">
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
