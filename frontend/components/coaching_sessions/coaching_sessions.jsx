import React from 'react';
import classes from './coaching_sessions.module.css';

class CoachingSessions extends React.Component {
  constructor(props) {
    super(props);
    this.extractDate = this.extractDate.bind(this);
    this.extractTime = this.extractTime.bind(this);
  }

  extractDate(fullDateTime) {
    const month = parseInt(fullDateTime.slice(5, 7), 10);
    const day = parseInt(fullDateTime.slice(8, 10), 10);
    const months = ['nil', 'Jan', 'Feb,', 'Mar', 'Apr', 'May',
      'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return [months[month], day];
  }

  extractTime(fullDateTime) {
    const hours = parseInt(fullDateTime.slice(11, 16), 10);
    if (hours > 12 ) {
      return (`${hours % 12}:00PM`);
    } else if ( hours === 12 ) {
      return (`${hours}:00PM`);
    }
    return (`${hours}:00AM`);
  }

  render() {
    const { coachingSessions, deleteSession } = this.props;
    return (
      <div className={classes.coachingSessionsMain}>
        {coachingSessions.map((session) => (
          <div className={classes.coachingSessions}>
            <ul>
              <li key={`${session.id}month`} className={classes.trainingMonth}>
                {this.extractDate(session.trainingDate)[0]}
              </li>
              <li key={`${session.id}day`} className={classes.trainingDay}>
                {this.extractDate(session.trainingDate)[1]}
              </li>

              <li key={`${session.id}time`} className={classes.trainingTime}>
                {this.extractTime(session.trainingDate)}
              </li>
            </ul>
            <ul>
              <li key={`${session.id}sport`}>
                Sport:
                {session.coach.sport}
              </li>
              <li key={`${session.id}name`}>
                Coach:
                {session.coach.firstName}
                {' '}
                {session.coach.lastName[0]}
              </li>
              <li key={`${session.id}desc`}>
                Description:
                {' '}
                {session.trainingDescription}
              </li>
              <li key={`${session.id}dur`}>
                Duration:
                {' '}
                {session.trainingDuration}
                {' '}
                minutes
              </li>
              <li key={`${session.id}cost`}>
                Cost: $
                {session.trainingRate}
              </li>
              <button
                type="button"
                onClick={() => deleteSession(session.id)}
              >
                Cancel
              </button>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default CoachingSessions;
