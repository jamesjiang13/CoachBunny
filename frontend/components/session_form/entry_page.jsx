import React from 'react';
import { Link } from 'react-router-dom';

class EntryPage extends React.Component {
  render() {
    return (
      <div>
        <button><Link to="/login"> Log in </Link></button>
        <button><Link to="/signup"> Sign up </Link></button>
      </div>
    );
  }
}

export default EntryPage;
