import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../entry_page.module.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { clearErrors } = this.props;
    clearErrors();
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
    const { emailAddress, password } = this.state;
    const { errors } = this.props;

    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <form className={classes.initialForm} onSubmit={this.handleSubmit}>
            <label> Email Address </label>
            <input
              className={classes.loginInput}
              type="text"
              value={emailAddress}
              onChange={this.update('emailAddress')}
            />
            <p className={classes.divider} />
            <label> Password </label>
            <input
              className={classes.loginInput}
              type="password"
              value={password}
              onChange={this.update('password')}
            />
            <p className={classes.divider} />
            {errors.map((error, idx) => <li className={classes.redError} key={idx}>{error}</li>)}
            <button className={classes.submitButton} type="submit"> Log in </button>
            <Link to="/signup" className={classes.submitButton}> Sign up </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
