import React from 'react';
import SoundCloud from 'react-icons/lib/fa/soundcloud';

const LandingPage = () => (
  <div className="app landing-page">
    <header className="session-header"></header>
    <main>
      <section className="front-hero">
        <header className="hero-header">
          <nav className="left-nav">
            <h1><SoundCloud size={46} className="sc-logo" />SOUNDCLOUD</h1>
          </nav>
          <nav className="right-nav">
            <button className="sign-in">Sign in</button>
            <button >Create Account</button>
          </nav>
        </header>
        <main className="hero-content">
          <h1>Welcome to SoundClone</h1>
          <p>Here is where some ads would be</p>
          <p>if I had anything to sell you.</p>
          <button>Start Cloning</button>
        </main>
      </section>
      <section className="front-content"></section>
    </main>
  </div>
);

export default LandingPage;
