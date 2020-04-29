import React from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapDispatch = (dispatch) => ({
  submitForm: (user) => dispatch(logIn(user)),
});

class EntryPage extends React.Component {
  handleClick(e) {
    e.preventDefault();
    const user = {
      email_address: 'demo@demo.com',
      password: 'demouserlogin',
    };
    const { submitForm } = this.props;
    submitForm(user);
  }

  render() {
    return (
      <div>
        <Link to="/" onSubmit={this.handleClick}> Demo User </Link>
        <button type="button"><Link to="/login"> Log in </Link></button>
        <button type="button"><Link to="/signup"> Sign up </Link></button>
      </div>
    );
  }
}

export default connect(
  null, mapDispatch,
)(EntryPage);
