import React, { Component } from 'react';

import FaSearch from 'react-icons/lib/fa/search';

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
      searchPool: []
    }
    this.buildSearchPool = this.buildSearchPool.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  buildSearchPool () {
    const pool = [];
    console.log(this.state.query)
    Object.keys(this.props.songs).filter((songId) => {
      const song = this.props.songs[songId];
      if (song.title.toUpperCase().includes(this.state.query.toUpperCase())) {
        pool.push({
          name: song.title,
          img_url: song.image_url,
          url: `/users/${song.user_id}/${song.id}`
        })
      };
    })
    Object.keys(this.props.users).forEach((userId) => {
      const user = this.props.users[userId];
      if (user.username.toUpperCase().includes(this.state.query.toUpperCase())) {
        pool.push({
          name: user.username,
          img_url: user.icon_url,
          url: `/users/${user.id}`
        });
      }
    })
    // const userPool =
    this.setState({
      searchPool: pool
    })
  }

  submitSearch (e) {
    e.preventDefault();

  }

  updateQuery (e) {
    this.setState({
      query: e.target.value
    }, this.buildSearchPool);
  }

  render () {
    return (
      <form
        className="search-wrapper header-wrapper"
        onSubmit={console.log}
        >
        <input
          className="header-search"
          type="search"
          placeholder="Search"
          value={this.state.query}
          onChange={this.updateQuery}
          />
        <button className="header-search search-button">
          <FaSearch id="magnifyingGlass" size={15} />
        </button>
      </form>
    )
  }
}
