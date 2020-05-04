import React from 'react';
import { Link } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return (
      <div>
        <div>

          <h3>user show page</h3>
          <Link to="/" onClick={logout}> Log out </Link>
        </div>
      </div>
    );
  }
}

export default Account;
