import React, { Component } from 'react';
import SoundCloud from 'react-icons/lib/fa/soundcloud';
import LoginModal from '../small_components/login_modal';

export default class LandingPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
    // trying to get body to stay fixed while form scrolls when modal open
    // document.getElementById('lanpg').classList.add('modal-open');
  }

  render() {
    return (
      <div id="lanpg" className="app landing-page">
        { this.state.showModal ? <LoginModal close={this.toggleModal} /> : null }
        <header className="session-header"></header>
        <main>
          <section className="front-hero">
            <header className="hero-header">
              <nav className="left-nav">
                <h1><SoundCloud size={46} className="sc-logo" />SOUNDCLOUD</h1>
              </nav>
              <nav className="right-nav">
                <button onClick={this.toggleModal} className="sign-in">Sign in</button>
                <button onClick={this.toggleModal}>Create Account</button>
              </nav>
            </header>
            <main className="hero-content">
              <h1>Welcome to SoundClone</h1>
              <p>Here is where some ads would be</p>
              <p>if I had anything to sell you.</p>
              <button onClick={this.toggleModal}>Start Cloning</button>
            </main>
          </section>
          <section className="front-content"></section>
        </main>
      </div>
    );
  }
}
