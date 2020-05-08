import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './search_select_item.module.css';

import { createCoachingSession } from '../../actions/coaching_session_actions';

class SearchSelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sportId: this.props.coach.sportId,
      coachId: this.props.coach.id,
      userId: this.props.userId,
      trainingDate: '',
      trainingDuration: this.props.coach.duration,
      trainingRate: this.props.coach.coachingRate,
      trainingDescription: 'need to work on this',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm(this.state);
    location.href = "/#/main/mysessions";
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  render() {
    const {
      firstName, lastName, coachingRate, duration, eliteCoach, equipment,
    } = this.props.coach;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.coachConfirmDetails}>
            <div>{firstName} {lastName[0]}</div>
            <div>{(eliteCoach ? "Elite" : null)}</div>
            <div>Price: ${coachingRate}/session</div>
            <div>Duration: {duration}</div>
            <div>Has equipment: {(equipment ? "yes" : "no")}</div>
          </div>
          <div>
            <input type="datetime-local" value={this.state.trainingDate} onChange={this.update("trainingDate")} />
          </div>
          <button type="submit"> Reserve this Coach </button>
        </form>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  coach: ownProps.history.location.state,
  userId: state.session.currentUserId,
});

const mapDispatch = (dispatch) => ({
  submitForm: (coachingSession) => dispatch(createCoachingSession(coachingSession)),
  // closeModal: () =>dispatch(closeModal()),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('select'))}>
  //     Select me
  //   </button>
  // )
});

export default withRouter(connect(
  mapState, mapDispatch,
)(SearchSelectItem));
