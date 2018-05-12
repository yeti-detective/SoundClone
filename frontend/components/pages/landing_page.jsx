import React, { Component } from 'react';
import SoundCloud from 'react-icons/lib/fa/cloud';
import SoundClone from 'react-icons/lib/fa/cloud';
import LoginModal from '../containers/login_form_container';
import SignupModal from '../containers/signup_form_container';
import SongBadgeIndex from '../containers/song_badge_index_container';

export default class LandingPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: null
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(choose) {
    return () => {
      this.setState({
        showModal: choose
      });
    };
    // trying to get body to stay fixed while form scrolls when modal open
    // document.getElementById('lanpg').classList.add('modal-open');
  }

  render() {

    return (
      <div id="lanpg" className="app landing-page">
        { this.state.showModal }
        <header className="session-header"></header>
        <main>
          <section className="front-hero">
            <header className="hero-header">
              <nav className="left-nav">
                <h1><SoundCloud size={46} className="sc-logo" />SOUNDCLONE</h1>
              </nav>
              <nav className="right-nav">
                <button
                  onClick={this.toggleModal(<LoginModal close={this.toggleModal()} />)}
                  className="sign-in">Sign in
                </button>
                <button
                  onClick={this.toggleModal(<SignupModal close={this.toggleModal()} />)}>
                  Create Account
                </button>
              </nav>
            </header>
            <main className="hero-content">
              <h1>Welcome to SoundClone</h1>
              <p>Here is where some ads would be</p>
              <p>if I had anything to sell you.</p>
              <button
                onClick={this.toggleModal(<SignupModal close={this.toggleModal()} />)}>
                Start Cloning
              </button>
            </main>
          </section>
          <section className="front-content">
            <SongBadgeIndex />
          </section>
        </main>
      </div>
    );
  }
}
