import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.currentUser;
  }

  render() {
    return (
      <div>
        <h3>user show page</h3>
        <Link to="/" onClick={this.props.logout}> Log out </Link>
      </div>
    )
  }
}

export default UserShow;
