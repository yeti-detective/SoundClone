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
    const pool = Object.keys(this.props.songs).map((songId) => ({
      name: this.props.songs[songId].title,
      img_url: this.props.songs[songId].image_url
    })).concat(Object.keys(this.props.users).map((userId) => ({
      name: this.props.users[userId].username,
      img_url: this.props.users[userId].icon_url
    })))
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
    })
    this.buildSearchPool();
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
