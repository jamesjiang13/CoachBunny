import React from 'react';
import classes from './coaching_sessions.module.css';

function extractDate(fullDateTime) {
  const month = parseInt(fullDateTime.slice(5, 7), 10);
  const day = parseInt(fullDateTime.slice(8, 10), 10);
  const months = ['nil', 'Jan', 'Feb,', 'Mar', 'Apr', 'May',
    'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return [months[month], day];
}

function extractTime(fullDateTime) {
  const hr = parseInt(fullDateTime.slice(11, 16), 10);
  const min = parseInt(fullDateTime.slice(14, 16), 10);
  let time;
  if (hr === 0 && min === 0) {
    time = '12:00AM';
  } else if (hr >= 12 && min > 0) {
    time = ((min < 10) ? `${hr % 12}:0${min}PM` : `${hr % 12}:${min}PM`)
  } else if (hr < 12) {
    time = ((min < 10) ? `${hr % 12}:0${min}AM` : `${hr % 12}:${min}AM`)
  } else if (hr === 12 && min === 0) {
    time = '12:00PM';
  }
  return time;
}

class CoachingSessionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { session, openModal } = this.props;
    openModal({ cancel: session });
  }

  render() {
    const { session } = this.props;

    return (
      <div className={classes.coachingSessions}>
        <ul className={classes.dateTime}>
          <li key={`${session.id}month`} className={classes.trainingMonth}>
            {extractDate(session.trainingDate)[0]}
            {' '}
            {extractDate(session.trainingDate)[1]}
          </li>
          <li key={`${session.id}time`} className={classes.trainingTime}>
            {extractTime(session.trainingDate)}
          </li>
        </ul>
        <ul>
          <li key={`${session.id}sport`}>
            Sport:
            {' '}
            {session.coach.sport}
          </li>
          <li key={`${session.id}name`}>
            Coach:
            {' '}
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
            onClick={this.handleClick}
          >
            Cancel
          </button>
        </ul>
      </div>
    );
  }
}

export default CoachingSessionItem;
