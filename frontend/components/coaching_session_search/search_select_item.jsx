import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
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
      errors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { trainingDate } = this.state;
    if (trainingDate === '') {
      this.setState({ errors: 'Must select a time' });
    } else {
      const { submitForm } = this.props;
      submitForm(this.state);
      location.href = '/#/main/mysessions';
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }
  render() {
    const {
      firstName, lastName, coachingRate, duration, eliteCoach, equipment,
    } = this.props.coach;

    return (
      <div className={classes.selectMainContainer}>
        <div className={classes.selectCoachContainer}>
          <div className={classes.textLogo}>
            <Link to="/main">
              <img className={classes.imgResponsive} src={window.textLogo} alt="logo" />
            </Link>
          </div>
          <form onSubmit={this.handleSubmit} className={classes.mainSelect}>
            <div className={classes.coachConfirmDetails}>
              <div className={classes.coachProfile}>
                <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1408385393/default_avatar.jpg" alt="profile" />
              </div>
              <div className={classes.coachName}>{firstName} {lastName[0]}</div>
              {/* <div className={classes.coachElite}>{(eliteCoach ? 'Elite' : null)}</div> */}
              {(!eliteCoach ? null : <div className={classes.coachElite}>Elite</div> )}
              
              <div>Price: ${coachingRate}/session</div>
              <div>Duration: {duration}mins</div>
              <div>Has equipment: {(equipment ? 'yes' : 'no')}</div>
            </div>
            <div className={classes.trainingTime}> Ideal training time:
              <input type="datetime-local" value={this.state.trainingDate} onChange={this.update("trainingDate")} />
            </div>
            <div className={classes.errors}>{this.state.errors}</div>
            <button type="submit"> Reserve this Coach </button>
          </form>
        </div>
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
