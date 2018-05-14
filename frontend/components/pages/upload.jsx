import React, { Component } from 'react';

export class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file
    };
    this.fileUpload = this.fileUpload.bind(this);
  }

  fileUpload() {
    return (e) => {
      console.log(e);
    };
  }

  render () {
    return (
      <form className="upload">
        <input onChange={this.fileUpload} type="file" value={this.state.file} />
      </form>
    );
  }
}
