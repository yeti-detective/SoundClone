import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    };
    this.fileUpload = this.fileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fileUpload(e) {
    this.setState({
      file: e.target.value
    });
  }

  handleSubmit() {
    $.ajax({
      url: "/api/upload/avatar",
      data: this.state.file
    });
  }

  render () {
    return (
      <form className="upload" onSubmit={this.handleSubmit}>
        <input onChange={this.fileUpload} type="file" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
