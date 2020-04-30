import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" onClick={this.props.logout}> Log out </Link> 
        <h4>this is the users dashboard</h4>
      </div>
    );
  }
}

export default Dashboard;
