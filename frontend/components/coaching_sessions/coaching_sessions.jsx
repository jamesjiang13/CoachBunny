import React from 'react';
import classes from './coaching_sessions.module.css';

class CoachingSessions extends React.Component {
  render() {
    const { coachingSessions } = this.props;
    return (
      <div className={classes.coachingSessionsMain}>
        {coachingSessions.map( (session) => (
          <div className={classes.coachingSessions}>
            <ul>
              {/* <li key="date">Date: {(new Date(session.trainingDate)).toLocaleDateString}</li>
              <li key="time">Time: {(new Date(session.trainingDate)).toLocaleTimeString}</li> */}
            </ul>
            <ul>
              <li key="sport">Sport: {session.coach.sport}</li>
              <li key="name">Coach: {session.coach.firstName} {session.coach.lastName[0]}</li>
              <li key="desc">
                Description: {session.trainingDescription}
              </li>
              <li key="dur">
                Duration: {session.trainingDuration} minutes
              </li>
              <li key="cost">
                Cost: ${session.trainingDate}/session
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default CoachingSessions;
