import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import FaceBook from 'react-icons/lib/fa/facebook-official';
import Google from 'react-icons/lib/fa/google';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginStep: 1,
      google: {username: 'Google', password: 'elgoog'},
      facebook: {username: 'Facebook', password: 'koobecaf'}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.close = this.close.bind(this);
    this.dummyLogin = this.dummyLogin.bind(this);
  }

  close() {
    return () => {
      // TODO: fix this
      this.props.close(null);
    };
  }

  goBack() {
    this.setState({
      loginStep: 1
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.state.loginStep < 2) {
      this.setState({
        loginStep: 2
      });
    } else {
      this.props.processForm({
        username: this.state.username,
        password: this.state.password
      });
      <Redirect to='/stream' />;
    }
  }

  dummyLogin(soshMeed) {
    return () => {
      const e = {};
      e.preventDefault = () => {
        console.log(`logging in as ${soshMeed.username}`);
      };
      this.setState({
        username: soshMeed.username,
        password: soshMeed.password
      });
      this.handleSubmit(e);
    };
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    let buttonText = 'Sign in';
    let inputField = 'password';
    let inputType = 'password';
    let placeHolder = 'enter your password';
    let inpValue = this.state.password;
    if (this.state.loginStep < 2) {
      buttonText = 'Continue';
      inputField = 'username';
      inputType = 'text';
      placeHolder = 'Enter your username';
      inpValue = this.state.username;
    }

    const PasswordForm = () => (
      <section>
        <button className="go-back" onClick={this.goBack}><span>&lt;</span>{this.state.username}</button>
      </section>
    );

    const UsernameForm = () => (
      <section>
        <div className="non-working-buttons">
          <div onClick={this.dummyLogin(this.state.facebook)} className="facebook dummy-login">
            <div className="tooltip">
              Login with dummy account: Facebook
              <div className="pointy-bit" />
            </div>
            <FaceBook size={40} /><p>Continue with Facebook</p></div>
          <div onClick={this.dummyLogin(this.state.google)} className="google dummy-login">
            <div className="tooltip">
              Login with dummy account: Google
              <div className="pointy-bit" />
            </div>
            <Google size={40} /><p>Continue with Google</p></div>
        </div>
        <h2 className="divider">or</h2>
      </section>
    );

    return (
      <div className="login-modal" onClick={this.close().bind(this)}>
        <p className='x' >&times;</p>
        <form
          className="login-form"
          onSubmit={this.handleSubmit}
          onClick={this.stopPropagation}
          >
          {this.state.loginStep < 2 ? <UsernameForm /> : <PasswordForm />}
          <input
            onChange={this.update(inputField)}
            type={inputType}
            placeholder={placeHolder}
            value={inpValue}
            />
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginModal);
