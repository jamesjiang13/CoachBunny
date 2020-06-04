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
        id: this.props.result.id,
        sportId: this.props.result.sportId,
        firstName: this.props.result.coach.firstName,
        lastName: this.props.result.coach.lastName,
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
      coachId, coach, coachingRate, duration, eliteCoach, equipment,
    } = this.props.result;

    return (
      <div className={classes.coachMain}>
        <div className={classes.coachProfile}>
          <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1408385393/default_avatar.jpg" alt="profile" />
        </div>
        <div className={classes.coachDetails}>
          <ul>
            <li key={`${coachId}name`}>{coach.firstName} {coach.lastName[0]} </li>
            <li key={`${coachId}rate`}>Session Rate: ${coachingRate}</li>
            <li key={`${coachId}dur`}>Session Duration: {duration}mins</li>
            <li key={`${coachId}elite`} className={classes.eliteStatus}>{(eliteCoach) ? 'Elite' : null}</li>
            <li key={`${coachId}equip`}>{(equipment) ? 'Has Equipment' : null }</li>
          </ul>
          <div className={classes.trainNow}>
            <button type="button" onClick={this.handleClick}> Train now </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
  mapState, mapDispatch,
)(SearchResultItem);
