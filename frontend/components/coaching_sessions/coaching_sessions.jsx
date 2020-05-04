import React from 'react';
import { Link } from 'react-router-dom';

class CoachingSessions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    return (
      this.props.coachingSessions
    );
  }

  render() {
    debugger
    return (
      <div>
        these are the coaching sessions
      </div>
    );
  }
}

export default CoachingSessions;
