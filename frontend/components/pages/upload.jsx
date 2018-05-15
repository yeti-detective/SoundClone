import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      songFile: null,
      songTitle: '',
      image_url: null,
      error: ''
    };
    this.fileUpload = this.fileUpload.bind(this);
    this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  fileUpload(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        file: file,
        image_url: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleAvatarSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('avatar[file]', this.state.songFile);
    $.ajax({
      method: 'post',
      url: 'api/upload/song',
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

  handleSongSubmit(e) {
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

  songFileUpoad(e) {
    const songFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        songFile: songFile,
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateTitle(e) {
    this.setState({
      songTitle: e.currentTarget.val
    });
  }

  render () {
    return (
      <main className="upload">
        { this.state.error }
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSongSubmit}>
          <input
            type="text"
            value={this.state.songTitle}
            placeholder="song title"
            onChange={this.updateTitle}
          />
          <input onChange={this.fileUpload} type="file" />
          <input type="submit" value="submit" />
        </form>
        <form onSubmit={this.handleAvatarSubmit}>
          <input onChange={this.fileUpload} type="file" />
          <input type="submit" value="submit" />
          <img src={this.state.image_url} />
        </form>
      </main>
    );
  }
}
