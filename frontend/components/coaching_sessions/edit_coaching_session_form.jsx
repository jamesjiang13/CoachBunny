import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCoachingSession, deleteCoachingSession } from '../../actions/coaching_session_actions';

class EditCoachingSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
    };
  }
  
  render() {
    return (
      <div>
        this is the edit session form. also should let a user delete session
      </div>
    );
  }
}


const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
  updateSession: (coachingSession) => dispatch(updateCoachingSession(coachingSession)),
  deleteSession: (coachingSession) => dispatch(deleteCoachingSession(coachingSession)), // maybe use coachingSessionId here
});

export default connect(
  mapState, mapDispatch,
)(EditCoachingSessionForm);
