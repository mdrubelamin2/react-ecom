import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
          <FormInput type="password" name='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;