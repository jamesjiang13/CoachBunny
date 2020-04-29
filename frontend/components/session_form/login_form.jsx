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
    this.props.submitForm(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Email Address </label>
          <br />
          <input
            type="text"
            value={this.state.email_address}
            onChange={this.update('email_address')}
          />
          <p />
          <label> Password </label>
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <p />
          {this.props.errors.map((error) => <li>{error}</li>)}
          <button> Log in </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
