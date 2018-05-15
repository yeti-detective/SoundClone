import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      image_url: null,
      error: ''
    };
    this.fileUpload = this.fileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fileUpload(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        file: file,
        image_url: fileReader.result
      }) ;
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append('avatar[file]', this.state.file);
    e.preventDefault();
    $.ajax({
      method: 'post',
      url: 'api/upload/avatar',
      data: formData,
      processData: false,
      contentType: false
    }).then((success) => {

    }, (err) => {
      this.setState({
        error: err.responseText
      });
    });
  }

  render () {
    return (
      <form className="upload" onSubmit={this.handleSubmit}>
        <input onChange={this.fileUpload} type="file" />
        <input type="submit" value="submit" />
        { this.state.error }
        <img src={this.state.image_url} />
      </form>
    );
  }
}
