import React, { Component } from 'react';
import SoundCloud from 'react-icons/lib/fa/cloud';
import Search from 'react-icons/lib/fa/search';
import Bell from 'react-icons/lib/fa/bell';
import Envelope from 'react-icons/lib/fa/envelope';
import ListIcon from 'react-icons/lib/fa/list';
import Stats from 'react-icons/lib/io/stats-bars';
import Star from 'react-icons/lib/md/star';
import Silhouette from 'react-icons/lib/fa/user';
import Follow from 'react-icons/lib/fa/user-secret';
import DownAngle from 'react-icons/lib/fa/angle-down';
import ThreeDots from 'react-icons/lib/io/android-more-horizontal';
import { Link } from 'react-router-dom';

import LogInModal from '../containers/login_form_container';
import SignUpModal from '../containers/signup_form_container';

// class fakeNotifications = [1, 2, 3, 4];


class UserHeaderBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false
    };
    this.whichForm = this.whichForm.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  logout() {
    this.props.logout().then(()=> {
      this.props.history.push('/');
    });
  }

  whichForm(choose) {
    switch (choose) {
      case 'login':
        return <LogInModal close={this.toggleModal()} />;
      case 'signup':
        return <SignUpModal close={this.toggleModal()} />;
      default:
        return null;
    }
  }

  toggleModal(choose) {
    return () => {
      this.setState({
        modal: choose
      });
    };
  }

  render () {

    return (

      <div className="header-bar-spacer-parent">
        { this.whichForm(this.state.modal) }
        <header className="user-header-bar">
          <div className="big-hugs">
            <ul className="header-wrapper-daddy">
              <Link to='/'>
                <li className="logo-hugger header-wrapper">
                  <SoundCloud size={45} className="sc-logo"/>
                </li>
              </Link>
              <li className="header-wrapper">
                <Link to='/'>Home</Link>
              </li>
              <li className="header-wrapper">
                <Link to='/collection'>Collection</Link>
              </li>
              <section className="header-wrapper-daddy header-middle">
                <div className="header-wrapper search-wrapper">
                  <input className="header-search" type="search" placeholder="Search" />
                  <button className="header-search search-button">
                    <Search id="magnifyingGlass" size={15} />
                  </button>
                </div>
              </section>
            </ul>
            <nav className="header-wrapper-right">
              <ul>
                <li className="header-wrapper">
                  <Link to="/upsell">Try Pro</Link>
                </li>
                <li className="header-wrapper">
                  <Link to="/upload">Upload</Link>
                </li>
                <li className="header-wrapper logo-wrapper">
                  <div>
                    <img className="user-logo-sm" src={this.props.currentUser.icon_url} />
                    <p><span><Link to={`users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link></span></p>
                    <DownAngle className="down-angle" size={15} />
                  </div>
                </li>
                <li className="header-wrapper">
                  <Bell size={17} />
                </li>
                <li className="header-wrapper">
                  <Envelope size={17} />
                </li>
                { this.props.currentUser.id ? (
                  <li
                    className="header-wrapper three-dots"
                    onClick={this.logout}
                    >
                    {/* <ThreeDots size={37} />*/}
                    <span className="temp-logout-icon">Logout</span>
                  </li>
                ) : (
                  <li
                    className="header-wrapper three-dots"
                    onClick={this.toggleModal('login')}
                    >
                    {/* <ThreeDots size={37} />*/}
                    <span className="temp-logout-icon">Login</span>
                  </li>
                )
                }
              </ul>
            </nav>
          </div>
        </header>
        <div className="header-bar-spacer"></div>
      </div>
    );
  }
}

export default UserHeaderBar;
