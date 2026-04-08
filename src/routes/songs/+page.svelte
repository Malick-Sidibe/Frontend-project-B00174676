<h2>Our Song Library</h2>

<p class="intro">
  We offer a massive collection of karaoke tracks across every genre. Whether you’re into pop, rock, R&B, hip‑hop, country, or golden‑age classics, we’ve got something for every voice and every vibe.
</p>

<div class="song-grid">
  <div class="song-card">
    <h4>Pop Hits</h4>
    <p>Billie Eilish, Dua Lipa, Ed Sheeran, Ariana Grande, and more.</p>
  </div>

  <div class="song-card">
    <h4>Rock Classics</h4>
    <p>Queen, Bon Jovi, AC/DC, Nirvana, Guns N’ Roses.</p>
  </div>

  <div class="song-card">
    <h4>R&B & Soul</h4>
    <p>Alicia Keys, Usher, Beyoncé, The Weeknd.</p>
  </div>

  <div class="song-card">
    <h4>Throwback Favourites</h4>
    <p>ABBA, Whitney Houston, Backstreet Boys, Spice Girls.</p>
  </div>
</div>

<style>
  h2 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .intro {
    margin-bottom: 25px;
  }

  .song-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .song-card {
    background: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--secondary);
  }

  .song-card h4 {
    margin-bottom: 10px;
    color: var(--secondary);
  }
</style>
