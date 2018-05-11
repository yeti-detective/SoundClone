import React, { Component } from 'react';

export default class SongShow extends Component {
  componentDidMount() {
    this.props.getSong(thisSong.id)
      .then(this.props.getUsersSongs(thisSong));
  }

  render () {
    return (
      <h1>
        {this.props.thisSong.title}
      </h1>
    );
  }
}
