import React from 'react';
import classes from './coaching_sessions.module.css';
import CoachingSessionItemContainer from './coaching_session_container';

class CoachingSessions extends React.PureComponent {
  render() {
    const { coachingSessions } = this.props;
    const sorted = coachingSessions.sort((a, b) => (a.trainingDate > b.trainingDate) ? 1 : -1)

    return (
      <div className={classes.coachingSessionsMain}>
        {sorted.map((session) => {
          return <CoachingSessionItemContainer session={session} key={session.id} />;
        })}
      </div>
    );
  }
}

export default CoachingSessions;
