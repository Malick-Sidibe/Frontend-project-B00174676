<script>
  const { children } = $props();
</script>

<header class="navbar">
  <h1>Mobile Karaoke & DJ</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/songs">Songs</a>
    <a href="/bookings">Bookings</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer class="footer">
  <p>© 2026 Mobile Karaoke & DJ</p>
</footer>

<style>
  :root {
    --primary: #8b5cf6;
    --secondary: #ec4899;
    --dark: #1a1a1a;
    --light: #ffffff;
  }

  header.navbar {
    background: var(--dark);
    color: var(--light);
    padding: 20px;
    border-bottom: 3px solid var(--primary);
  }

  header h1 {
    margin: 0 0 10px 0;
    font-size: 28px;
    font-weight: bold;
    color: var(--primary);
  }

  nav a {
    margin-right: 20px;
    color: var(--light);
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s;
  }

  nav a:hover {
    color: var(--secondary);
  }

  main {
    padding: 25px;
    background: #f8f8f8;
    min-height: 70vh;
  }

  footer.footer {
    background: var(--dark);
    color: var(--light);
    text-align: center;
    padding: 15px;
    border-top: 3px solid var(--secondary);
    margin-top: 40px;
  }
</style>
