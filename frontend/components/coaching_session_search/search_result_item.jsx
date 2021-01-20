import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import classes from './search_result_item.module.css';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { openModal } = this.props;
    const selected = {
      coach: {
        id: this.props.result.coachId,
        sportId: this.props.result.sportId,
        firstName: this.props.result.coach.firstName,
        lastName: this.props.result.coach.lastName,
        imageUrl: this.props.result.coach.imageUrl,
        duration: this.props.result.duration,
        coachingRate: this.props.result.coachingRate,
        eliteCoach: this.props.result.eliteCoach,
        equipment: this.props.result.equipment,
      },
    };

    openModal({ select: selected });
  }

  render() {
    const {
      coachId, coach, coachingRate, duration, eliteCoach, equipment, sessionDescription,
    } = this.props.result;

    return (
      <div className={classes.coachMain}>
        <div className={classes.coachProfile}>
          {(coach.imageUrl
            ? <img src={coach.imageUrl} alt="profile" />
            : <img src={window.profilePic} alt="profile" />
          )}
          <button type="button" className={classes.trainNow} onClick={this.handleClick}> Train now </button>
          <span>
            You can adjust training details, or change training time after booking.
          </span>
        </div>
        <div className={classes.coachDetails}>
          <div className={classes.coachNameContainer}>
            <span className={classes.coachName}>{coach.firstName} {coach.lastName[0]}.</span>
            <span className={classes.coachRate}>${coachingRate}/session</span>
          </div>
          <ul>
            {(eliteCoach)
              ? <li key={`${coachId}elite`} className={classes.elite}>Elite</li>
              : null}
            <li key={`${coachId}equip`} className={classes.equipment}>{(equipment) ? 'Has Equipment' : null }</li>
            <li key={`${coachId}dur`}>Session Duration: {duration}mins</li>
            <li key={`${coachId}desc`}>About Me: {coach.coachDescription}</li>
          </ul>
          <div className={classes.trainingDescription}>
            <span>How I can help:</span>
            <br />
            <span>{sessionDescription}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
  null, mapDispatch,
)(SearchResultItem);
