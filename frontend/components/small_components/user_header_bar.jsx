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
import { Link } from 'react-router-dom';

const fakeNotifications = [1, 2, 3, 4];

const TestDude = (props) => (
  <div>Test, dude</div>
);

const UserHeaderBar = (props) => (
  <header className="user-header-bar">
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
    <section className="header-middle">
      <div className="header-wrapper search-wrapper">
        <input className="header-search" type="search" placeholder="Search" />
        <button className="header-search"><Search /></button>
      </div>
    </section>
  </header>
);

export default UserHeaderBar;
// <nav className="header-left">
//   <SoundCloud className="sc-logo" />
//   <Link to='/stream'>Home</Link>
//   <Link to='/collection'>Collection</Link>
// </nav>
// <section className="header-middle">
//   <input
//     type="search"
//     placeholder="Search"
//   />
// <button className="search search-button"><Search /></button>
// </section>
// <nav className="header-right">
//   <Link to="/link_dumpster">Try Pro</Link>
//   <Link to="/upload">Upload</Link>
//   <div className="user-button">
//     <img className="user-header-logo" src="{window.staticAssets.fifthSon}" />
//     Fake Username!
//     <ul>
//       /* Icons needed:
//         Head guy
//         heart
//         box on box
//         radio signal dot thing
//         follower (it follows...)
//         who to follow (just a shade-reversed of follower?)
//         star
//         vertical bar graph
//         dot line, dot line, dot line (morse code for a a a)
//       */
//       <li>Profile</li>
//       <li>Likes</li>
//       <li>Playlists</li>
//       <li>Stations</li>
//       <li>Following</li>
//       <li>Who to follow</li>
//       <li>Try Pro</li>
//       <li>Stats</li>
//       <li>Tracks</li>
//     </ul>
//   </div>
//   <div className="notifications">
//     Bell Icon
//     <ul>
//
//       <li><Link to="/notifications">All Notifications</Link></li>
//     </ul>
//   </div>
//   <div>
//     Message Icon
//
//   </div>
// </nav>
