import React from 'react';
import classes from './search_result_item.module.css';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { coachId, coach, coachingRate, duration, eliteCoach, equipment } = this.props
    return (
      <div className={classes.coachMain}>
        <div className={classes.coachProfile}>
          <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1408385393/default_avatar.jpg" alt="profile"></img>
        </div>
        <div className={classes.coachDetails}>
          <ul>
            <li key={`${coachId}name`}>{this.props.result.coach.firstName} {this.props.result.coach.lastName} </li>
            <li key={`${coachId}rate`}>Session Rate: ${this.props.result.coachingRate}</li>
            <li key={`${coachId}dur`}>Session Duration: {this.props.result.duration}mins</li>
            <li key={`${coachId}elite`} className={classes.eliteStatus}>{(this.props.result.eliteCoach)? "Elite": null}</li>
            <li key={`${coachId}equip`}>{(this.props.result.equipment) ? "Has Equipment" : null }</li>
          </ul>
          <div className={classes.trainNow}>
            <button> Train now </button>
          </div>
        </div>
      </div>
   );
  }
};

export default SearchResultItem;
