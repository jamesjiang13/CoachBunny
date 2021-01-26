import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../entry_page.module.css';

function validateEmail(email) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

function validateAreaCode(zip) {
  return /^\d{5}$/.test(zip);
}

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      zipCode: '',
    };

    this.currentErrors = {};
    this.existingErrors = '';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    const { clearErrors } = this.props;
    clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const emptyInput = Object.values(this.state).some((input) => input.length === 0);

    if (Object.keys(this.currentErrors).length === 0 && !emptyInput) {
      this.existingErrors = '';
      const { submitForm } = this.props;
      submitForm(this.state);
    } else {
      this.existingErrors = 'Please fill in the information correctly';
      this.forceUpdate();
    }
  }

  handleBlur(e) {
    const len = e.target.value.length;
    const field = e.target.name;
    const val = e.target.value;

    if (len < 1) {
      this.currentErrors[field] = 'Cannot be blank';
    } else if (field === 'email' && !validateEmail(val)) {
      this.currentErrors[field] = 'Invalid email address';
    } else if (field === 'zipCode' && !validateAreaCode(val)) {
      this.currentErrors[field] = 'Invalid zip Code';
    } else if (field === 'password' && len <= 6) {
      this.currentErrors[field] = 'Password must be greater than 6 characters';
    } else {
      delete this.currentErrors[field];
    }
    this.forceUpdate();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const {
      firstName, lastName, emailAddress, password, zipCode,
    } = this.state;
    const { errors } = this.props;

    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <form className={classes.initialForm} onSubmit={this.handleSubmit}>
            <label> First Name </label>
            <input
              type="text"
              value={firstName}
              name="firstName"
              onChange={this.update('firstName')}
              onBlur={this.handleBlur}
            />
            <span className={classes.errors}>{this.currentErrors.firstName}</span>
            <p className={classes.divider} />
            <label> Last Name </label>
            <input
              type="text"
              value={lastName}
              name="lastName"
              onChange={this.update('lastName')}
              onBlur={this.handleBlur}
            />
            <span className={classes.errors}>{this.currentErrors.lastName}</span>
            <p className={classes.divider} />
            <label> Email Address </label>
            <input
              type="email"
              value={emailAddress}
              name="email"
              onChange={this.update('emailAddress')}
              onBlur={this.handleBlur}
            />
            <span className={classes.errors}>{this.currentErrors.email}</span>
            <p className={classes.divider} />
            <label> Password </label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.update('password')}
              onBlur={this.handleBlur}
            />
            <span className={classes.errors}>{this.currentErrors.password}</span>
            <p className={classes.divider} />
            <label> Zip Code </label>
            <input
              type="text"
              value={zipCode}
              name="zipCode"
              onChange={this.update('zipCode')}
              onBlur={this.handleBlur}
            />
            <span className={classes.errors}>{this.currentErrors.zipCode}</span>
            <p className={classes.divider} />
            <span className={classes.disclaimer}>By clicking below and creating an account, I agree to CoachBunny&#39;s Terms of Service and Privacy Policy.</span>
            <ul className={classes.errorsContainer}>
              {errors.map((error, idx) => <li className={classes.redError} key={idx}>{error}</li>)}
            </ul>
            <span className={classes.redError}>{this.existingErrors}</span>
            <button className={classes.submitButton} type="submit"> Create Account </button>
            <Link to="/login" className={classes.buttonFirst}> Log in </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
