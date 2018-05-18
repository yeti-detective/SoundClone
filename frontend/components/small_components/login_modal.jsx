import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import Google from 'react-icons/lib/fa/google';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginStep: 1,
      loginErrors: [],
      formType: this.props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.close = this.close.bind(this);
    this.dummyLogin = this.dummyLogin.bind(this);
  }

  close() {
    return () => {
      // TODO: fix this, see lines 47 60 107
      this.props.close(null);
    };
  }

  goBack(e) {
    e.preventDefault();
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
      }).then(() => {
        this.close()();
      }, (err)=> {
        this.setState({
          loginErrors: err.responseJSON
        });
      });
    }
  }

  dummyLogin() {
    this.props.processForm({
      username: 'GuestUser', password: 'starwars'
    });
    this.close()();
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
          <button onClick={this.dummyLogin} className="google dummy-login">
            <Google size={40} /><p>Continue as Guest User</p>
          </button>
        </div>
        <h2 className="divider">or</h2>
      </section>
    );

    return (
      <div className="login-modal" onClick={this.close().bind(this)}>
        <p className='x' >&times;</p>
        <section
          className="login-form"
          onClick={this.stopPropagation}
          >
          {this.state.loginStep < 2 ? <UsernameForm /> : <PasswordForm />}
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.update(inputField)}
              type={inputType}
              placeholder={placeHolder}
              value={inpValue}
              />
            {this.state.loginErrors.map((error) => {
              return <h4 style={{color: 'red', marginLeft: '35%'}}>{error}</h4>;
              })}
              <button onClick={this.handleSubmit}>{buttonText}</button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginModal);
