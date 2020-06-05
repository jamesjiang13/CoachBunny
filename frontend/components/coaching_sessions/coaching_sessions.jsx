import React from 'react';
import classes from './coaching_sessions.module.css';
import CoachingSessionItemContainer from './coaching_session_container';

class CoachingSessions extends React.PureComponent {
  render() {
    const { coachingSessions } = this.props;
    return (
      <div className={classes.coachingSessionsMain}>
        {coachingSessions.map((session) => {
          return <CoachingSessionItemContainer session={session} key={session.id} />;
        })}
      </div>
    );
  }
}

export default CoachingSessions;
