import React, { Component } from 'react';

import FaSearch from 'react-icons/lib/fa/search';

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    }

    this.updateQuery = this.updateQuery.bind(this);
  }

  submitSearch (e) {
    e.preventDefault();

  }

  updateQuery (e) {
    this.setState({
      query: e.target.value
    })
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
