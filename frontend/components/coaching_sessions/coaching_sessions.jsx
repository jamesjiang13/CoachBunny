import React from 'react';
import classes from './coaching_sessions.module.css';

class CoachingSessions extends React.Component {
  render() {
    return (
      <div className={classes.coachingSessionsMain}>
        {this.props.coachingSessions.map( (session) => (
          <div className={classes.coachingSessions}>
            <ul>
              {/* <li key="date">Date: {(new Date(session.training_date)).toLocaleDateString}</li>
              <li key="time">Time: {(new Date(session.training_date)).toLocaleTimeString}</li> */}
            </ul>
            <ul>
              <li key="desc">Description: {session.training_description}</li>
              <li key="dur">Duration: {session.training_duration} minutes</li>
              <li key="cost">Cost: ${session.training_rate}/session</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default CoachingSessions;
