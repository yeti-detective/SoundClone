import React, { Component } from 'react';
import FaceBook from 'react-icons/lib/fa/facebook-official';
import Google from 'react-icons/lib/fa/google';

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginStep: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
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
    // alert("now I'll make the password form!");
    // this.props.close();
    if (this.state.loginStep < 2) {
      this.setState({
        loginStep: 2
      });
    } else {
      // trigger login action
      alert("and NOW i'll connect the form to the login/create user actions");
      alert(`the username was: ${this.state.username} and the password was ${this.state.password}`);
      this.goBack();
      this.close();
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  goBack() {
    this.setState({
      loginStep: 1
    });
  }

  render() {
    let buttonText = 'Sign in';
    let inputField = 'password';
    let placeHolder = 'enter your password';
    let inpValue = this.state.password;
    if (this.state.loginStep < 2) {
      buttonText = 'Continue';
      inputField = 'username';
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
          <div title="just kidding, this doesn't work" className="facebook">
            <FaceBook size={40} /><p>Continue with Facebook</p></div>
          <div title="come on... " className="google">
            <Google size={40} /><p>Continue with Google</p></div>
        </div>
        <h2 className="divider">or</h2>
      </section>
    );

    return (
      <div className="login-modal" onClick={this.props.close}>
        <p className='x' >&times;</p>
        <form
          className="login-form"
          onSubmit={this.handleSubmit}
          onClick={this.stopPropagation}
          >
          {this.state.loginStep < 2 ? <UsernameForm /> : <PasswordForm />}
          <input
            onChange={this.update(inputField)}
            type="text"
            placeholder={placeHolder}
            value={inpValue}
            />
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}
