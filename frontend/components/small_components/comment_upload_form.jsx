import React, { Component } from 'react';

export default class CommentUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',

    };
    this.updateComment = this.updateComment.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  hideIfNotLoggedIn () {
    if (this.props.loggedIn) {
      return {display: 'table'};
    } else {
      return {display: 'none'};
    }
  }

  postComment(e) {
    e.preventDefault();
    $.ajax({
      method: 'post',
      url: '/api/comments',
      data: {
        comment: {
          body: this.state.body,
          song_id: this.props.songId
        }
      }
    }).then(() => {
      this.props.getComments(this.props.songId);
      this.setState({
        body: ''
      });
    }, (err) => {
      this.setState({
        errors: err.responseText
      });
    });
  }

  updateComment (e) {
    this.setState({
      body: e.target.value
    });
  }

  render() {
    return (
      <form
        style={this.hideIfNotLoggedIn()}
        onSubmit={this.postComment}
        className='comment-upload-form'
        >
        { this.state.errors }
        <input
          onChange={this.updateComment}
          value={this.state.body}
          type="text"
          placeholder="add a comment..."
          />
        <button>post comment</button>
      </form>
    );
  }
}
