import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      phoneNumber: '',
      zipCode: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const {
      firstName, lastName, emailAddress, password, phoneNumber, zipCode,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> First Name </label>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={this.update('firstName')}
          />
          <p />
          <label> Last Name </label>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={this.update('lastName')}
          />
          <p />
          <label> Email Address </label>
          <br />
          <input
            type="text"
            value={emailAddress}
            onChange={this.update('emailAddress')}
          />
          <p />
          <label> Password </label>
          <br />
          <input
            type="password"
            value={password}
            onChange={this.update('password')}
          />
          <p />
          <label> Zip Code </label>
          <br />
          <input
            type="text"
            value={zipCode}
            onChange={this.update('zipCode')}
          />
          <p />
          <label> Phone Number </label>
          <br />
          <input
            type="text"
            value={phoneNumber}
            onChange={this.update('phoneNumber')}
          />
          <p />
          <button type="submit"> Create Account </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
