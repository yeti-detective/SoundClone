import React, { Component } from 'react';
import FaceBook from 'react-icons/lib/fa/facebook-official';
import Google from 'react-icons/lib/fa/google';

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("now I'll make the password form!");
    this.props.close();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="login-modal" onClick={this.props.close}>
        <p className='x' >&times;</p>
        <form
          className="login-form"
          onSubmit={this.handleSubmit}
          onClick={this.stopPropagation}
          >
          <div className="non-working-buttons">
            <div title="just kidding, this doesn't work" className="facebook">
              <FaceBook size={40} /><p>Continue with Facebook</p></div>
            <div title="come on... " className="google">
              <Google size={40} /><p>Continue with Google</p></div>
          </div>
          <h2 className="divider">or</h2>
          <input
            onChange={this.update('username')}
            type="text"
            placeholder="Your username"
            value={this.state.username}
            />
          <button>Continue</button>
        </form>
      </div>
    );
  }
}
