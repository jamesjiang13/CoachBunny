import React from 'react';

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

    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <form onSubmit={this.handleSubmit}>
            <label> First Name </label>
            <br />
            <input
              type="text"
              value={first_name}
              onChange={this.update('first_name')}
            />
            <p />
            <label> Last Name </label>
            <br />
            <input
              type="text"
              value={last_name}
              onChange={this.update('last_name')}
            />
            <p />
            <label> Email Address </label>
            <br />
            <input
              type="text"
              value={email_address}
              onChange={this.update('email_address')}
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
              value={zip_code}
              onChange={this.update('zip_code')}
            />
            <p />
            <label> Phone Number </label>
            <br />
            <input
              type="text"
              value={phone_number}
              onChange={this.update('phone_number')}
            />
            <p />
            <button type="submit"> Create Account </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
