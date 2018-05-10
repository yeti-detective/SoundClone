import React from 'react';
import SoundCloud from 'react-icons/lib/fa/soundcloud';
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

const fakeNotifications = [1, 2, 3, 4];

const TestDude = (props) => (
  <div>Test, dude</div>
);

const UserHeaderBar = (props) => (
  <header className="user-header-bar">
    <div className="big-hugs">
      <ul className="header-wrapper-daddy">
        <li className="logo-hugger header-wrapper">
            <SoundCloud size={45} className="sc-logo"/>
        </li>
        <li className="header-wrapper">
          <Link to='/stream'>Home</Link>
        </li>
        <li className="header-wrapper">
          <Link to='/collection'>Collection</Link>
        </li>
      </ul>
      <section className="header-wrapper-daddy header-middle">
        <div className="header-wrapper search-wrapper">
          <input className="header-search" type="search" placeholder="Search" />
          <button className="header-search search-button">
            <Search className="magnifying-glass" size={15} />
          </button>
        </div>
      </section>
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
              <img className="user-logo-sm" src={window.staticAssets.fifthSon} />
              <DownAngle className="down-angle" size={15} />
            </div>
          </li>
          <li className="header-wrapper">
            <Bell size={17} />
          </li>
          <li className="header-wrapper">
            <Envelope size={17} />
          </li>
          <li className="header-wrapper three-dots">
            <ThreeDots size={37} />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default UserHeaderBar;
