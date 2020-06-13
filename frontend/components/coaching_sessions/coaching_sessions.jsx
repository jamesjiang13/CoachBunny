import React from 'react';
import classes from './coaching_sessions.module.css';
import CoachingSessionItemContainer from './coaching_session_container';

class CoachingSessions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: 'upcoming',
      // active: 'upcoming',
      // inactive: 'past',
    };
    this.handleClick = this.handleClick.bind(this);
    this.filterDate = this.filterDate.bind(this);
  }

  handleClick(selection) {
    const { time } = this.state;
    if (selection !== time) {
      return () => this.setState({ time: selection });
    }
  }
  // click on tab, set classname === opposite of what it is: change inactive to active, vice versa
  // need to reset other tab as well, active to inactive, vice versa
  // add css to 'active' class

  filterDate(sessions) {
    const { time } = this.state;
    let timeFilter;

    if (time === 'upcoming') {
      timeFilter = sessions.filter((session) => new Date(session.trainingDate) > new Date());
    } else {
      timeFilter = sessions.filter((session) => new Date(session.trainingDate) < new Date());
    }
    return timeFilter.sort((a, b) => (a.trainingDate > b.trainingDate) ? 1 : -1);
  }

  render() {
    const { coachingSessions } = this.props;
    const { time } = this.state;
    const sorted = this.filterDate(coachingSessions);

    return (
      <div className={classes.coachingSessionsMain}>
        <div className={classes.timeToggle}>
          <button type="button" className={classes.upcoming} onClick={this.handleClick('upcoming')}>Upcoming Sessions</button>
          <button type="button" className={classes.past} onClick={this.handleClick('past')}>Past Sessions</button>
        </div>
        {sorted.map((session) => {
          return <CoachingSessionItemContainer session={session} key={session.id} time={time} />;
        })}
      </div>
    );
  }
}

export default CoachingSessions;
