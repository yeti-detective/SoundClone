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
    this.songFileUpoad = this.songFileUpoad.bind(this);
    this.handleSongSubmit = this.handleSongSubmit.bind(this);
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
    formData.append('avatar[file]', this.state.file);
    $.ajax({
      method: 'post',
      url: 'api/upload/avatar',
      data: formData,
      processData: false,
      contentType: false
    }).then((success) => {
      console.log(success);
    }, (err) => {
      this.setState({
        error: err.responseText
      });
    });
  }

  handleSongSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('song[song_file]', this.state.songFile);
    formData.append('song[title]', this.state.songTitle);
    $.ajax({
      method: 'post',
      url: 'api/songs',
      data: formData,
      processData: false,
      contentType: false
    }).then((success) => {
      console.log(success);
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
    if (songFile) {
      fileReader.readAsDataURL(songFile);
    }
  }

  updateTitle(e) {
    this.setState({
      songTitle: e.target.value
    });
  }

  render () {
    return (
      <main className="upload">
        { this.state.error }
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSongSubmit} className="song-form">
          <label>Song Title Upload
            <input
              type="text"
              value={this.state.songTitle}
              placeholder="song title"
              onChange={this.updateTitle}
              />
          </label><br />
        <label>Song File Upload
            <input onChange={this.songFileUpoad} type="file" />
          </label><br />
          <input type="submit" value="submit" />
        </form><br />
        <form onSubmit={this.handleAvatarSubmit} className="avatar-form">
          <label>User Image Upload<br />
            <input onChange={this.fileUpload} type="file" />
          </label><br />
          <input type="submit" value="submit" />
          <label>{ this.state.image_url && "Your Image" }
            <img src={this.state.image_url} />
          </label><br />
        </form>
      </main>
    );
  }
}
