<h2 class="hero-title">Welcome to Mobile Karaoke & DJ</h2>

<section class="hero">
  <p>
    Founded in 2012, Mobile Karaoke & DJ began as a small passion project with a single speaker, a laptop full of songs, and a dream to bring unforgettable nights to local parties. What started as a weekend hobby quickly grew into one of the most trusted mobile entertainment services in the region.
  </p>

  <p>
    Over the years, we've performed at hundreds of events — from intimate birthday gatherings to large corporate celebrations and wedding receptions. Our team has built a reputation for reliability, energy, and a genuine love for music. We believe every event deserves a soundtrack that fits the moment.
  </p>

  <p>
    Today, we offer a fully modern setup with professional-grade audio equipment, dynamic lighting, wireless microphones, and an ever-growing music library spanning every genre and decade. Whether you're into classic rock, R&B, pop hits, or karaoke classics, we’ve got something for everyone.
  </p>

  <!-- FIXED BUTTON: now links to /bookings -->
  <a href="/bookings" class="cta">Book Now</a>
</section>

<section class="why">
  <h3>Why Choose Us?</h3>

  <div class="why-grid">
    <div class="why-card">
      <h4>Professional Equipment</h4>
      <p>Crystal-clear sound, vibrant lighting, and reliable wireless microphones for every event size.</p>
    </div>

    <div class="why-card">
      <h4>Massive Song Library</h4>
      <p>From old-school classics to the latest chart-toppers, we have something for every voice.</p>
    </div>

    <div class="why-card">
      <h4>Experienced DJs</h4>
      <p>Over a decade of experience delivering unforgettable nights and keeping crowds engaged.</p>
    </div>

    <div class="why-card">
      <h4>Fully Mobile Setup</h4>
      <p>We bring the party to you — homes, venues, outdoors, anywhere you need us.</p>
    </div>
  </div>
</section>

<section class="testimonials">
  <h3>What Our Clients Say</h3>

  <div class="test-grid">
    <div class="test-card">
      <p>"Absolutely amazing! The karaoke setup made our wedding night unforgettable. Everyone had a blast."</p>
      <span>- Sarah & Liam</span>
    </div>

    <div class="test-card">
      <p>"Professional, fun, and incredibly easy to work with. Best DJ service we've ever hired."</p>
      <span>- Mark, Corporate Event</span>
    </div>

    <div class="test-card">
      <p>"The song selection was huge and the energy was perfect all night long. Highly recommend!"</p>
      <span>- Jade’s 21st Birthday</span>
    </div>
  </div>
</section>

<style>
  :root {
    --primary: #8b5cf6;
    --secondary: #ec4899;
    --dark: #1a1a1a;
    --light: #ffffff;
  }

  .hero {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    padding: 40px;
    border-radius: 10px;
    color: var(--light);
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--primary);
  }

  .cta {
    margin-top: 20px;
    padding: 12px 25px;
    background: var(--dark);
    color: var(--light);
    border: none;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s;
    display: inline-block;
    text-decoration: none;
  }

  .cta:hover {
    background: var(--light);
    color: var(--dark);
  }

  .why {
    margin-bottom: 40px;
  }

  .why h3 {
    font-size: 26px;
    margin-bottom: 20px;
    color: var(--primary);
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .why-card {
    background: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .why-card h4 {
    margin-bottom: 10px;
    color: var(--primary);
  }

  .testimonials h3 {
    font-size: 26px;
    margin-bottom: 20px;
    color: var(--secondary);
  }

  .test-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .test-card {
    background: #fafafa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--secondary);
    font-style: italic;
  }

  .test-card span {
    display: block;
    margin-top: 10px;
    font-weight: bold;
    color: var(--secondary);
  }
</style>
