import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      password: '',
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
    const { email_address, password } = this.state;
    const { errors } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          {errors.map((error) => <li>{error}</li>)}
          <button type="submit"> Log in </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
