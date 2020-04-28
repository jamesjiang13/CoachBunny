import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state.entities.users);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label> Email Address
            <input
              type='text'
              value={this.state.entities.users.id.email_address}
              onChange={this.update('email')}
            />
          </label>
          <label> Password
            <input
              type='password'
              value={this.state.entities.users.id}
              onChange={this.update('password')}
            />
          </label>
          <button> Log in </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;