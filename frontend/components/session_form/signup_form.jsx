import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email_address: "",
      password: "",
      phone_number: "",
      zip_code: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> First Name </label>
          <br />
          <input
            type='text'
            value={this.state.first_name}
            onChange={this.update('first_name')}/>
          <p />
          <label> Last Name </label>
          <br />
          <input
            type='text'
            value={this.state.last_name}
            onChange={this.update('last_name')}/>
          <p />
          <label> Email Address </label>
          <br />
          <input
            type='text'
            value={this.state.email_address}
            onChange={this.update('email_address')}/>
          <p />
          <label> Password </label>
          <br />
          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}/>
          <p />
          <label> Zip Code </label>
          <br />
          <input
            type='text'
            value={this.state.zip_code}
            onChange={this.update('zip_code')} />
          <p />
          <label> Phone Number </label>
          <br />
          <input
            type='text'
            value={this.state.phone_number}
            onChange={this.update('phone_number')} />
          <p />
          <button> Create Account </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;