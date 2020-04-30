import React from 'react';
import classes from '../entry_page.module.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      password: '',
      phone_number: '',
      zip_code: '',
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
      first_name, last_name, email_address, password, phone_number, zip_code,
    } = this.state;
    // const { errors } = this.props;

    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <form className={classes.initialForm} onSubmit={this.handleSubmit}>
            <label> First Name </label>
            <input
              type="text"
              value={first_name}
              onChange={this.update('first_name')}
            />
            <p />
            <label> Last Name </label>
            <input
              type="text"
              value={last_name}
              onChange={this.update('last_name')}
            />
            <p />
            <label> Email Address </label>
            <input
              type="text"
              value={email_address}
              onChange={this.update('email_address')}
            />
            <p />
            <label> Password </label>
            <input
              type="password"
              value={password}
              onChange={this.update('password')}
            />
            <p />
            <label> Zip Code </label>
            <input
              type="text"
              value={zip_code}
              onChange={this.update('zip_code')}
            />
            <p />
            <label> Phone Number </label>
            <input
              className={classes.signupPhoneInput}
              type="text"
              value={phone_number}
              onChange={this.update('phone_number')}
            />
            <span className={classes.disclaimer}>By clicking below and creating an account, I acknowledge that I probably felt cute, idk, might delete later.</span>
            {/* {errors.map((error) => <li className={classes.errors}>{error}</li>)} */}
            <button className={classes.submitButton} type="submit"> Create Account </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
