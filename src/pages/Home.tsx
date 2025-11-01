import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Kelsey Day's Literary World</h1>
          <p className="hero-subtitle">
            Exploring stories that touch the heart and ignite the imagination
          </p>
        </div>
      </section>

      <section className="featured-works">
        <div className="container">
          <h2>Featured Works</h2>
          <div className="works-grid">
            <div className="work-card">
              <div className="work-placeholder">Book Cover</div>
              <h3>The Silent Echo</h3>
              <p>A gripping tale of mystery and redemption set in the Scottish Highlands.</p>
            </div>
            <div className="work-card">
              <div className="work-placeholder">Book Cover</div>
              <h3>Whispers in Time</h3>
              <p>A historical fiction journey through generations of one family's secrets.</p>
            </div>
            <div className="work-card">
              <div className="work-placeholder">Book Cover</div>
              <h3>The Last Garden</h3>
              <p>A poignant story about healing, loss, and finding beauty in unexpected places.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Subscribe to receive updates about new releases and exclusive content</p>
          <button className="cta-button">Subscribe Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
