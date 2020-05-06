import React from 'react';
import classes from './coaching_sessions.module.css';

class CoachingSessions extends React.Component {
  constructor(props){
    super(props);

    this.extractDate = this.extractDate.bind(this);
    this.extractTime = this.extractTime.bind(this);
  }

  extractDate(fullDateTime) {
    const dateTimeObj = new Date(fullDateTime);
    const month = dateTimeObj.getMonth();
    const day = dateTimeObj.getDay();
    // const months = ['Jan', 'Feb,', 'Mar', 'Apr', 'May',
    //   'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    // debugger;
    return (
      [month, day]
    );
  }

  extractTime(fullDateTime) {
    let time = fullDateTime.slice(11, 16);
    const hours = parseInt(time.slice(0, 2));
    debugger;
    if (hours > 12) {
      return (time = `${hours % 12}:00PM`);
    }
    return (`${hours}:00AM`);
  }

  render() {
    const { coachingSessions } = this.props;
    return (
      <div className={classes.coachingSessionsMain}>
        {coachingSessions.map((session) => (
          <div className={classes.coachingSessions}>
            <ul>
              <li key="date">
                Month:
                {this.extractDate(session.trainingDate)[0]}
              </li>
              <li key="date">
                Day:
                {this.extractDate(session.trainingDate)[1]}
              </li>

              <li key="time">
                Time:
                {() => extractTime(session.trainingDate)}
              </li>
            </ul>
            <ul>
              <li key="sport">
                Sport:
                {session.coach.sport}
              </li>
              <li key="name">
                Coach:
                {session.coach.firstName}
                {' '}
                {session.coach.lastName[0]}
              </li>
              <li key="description">
                Description:
                {' '}
                {session.trainingDescription}
              </li>
              <li key="duration">
                Duration:
                {' '}
                {session.trainingDuration}
                {' '}
                minutes
              </li>
              <li key="cost">
                Cost: $
                {session.trainingRate}
                /session
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default CoachingSessions;
