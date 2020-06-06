import React from 'react';
import { connect } from 'react-redux';
import { editCoachingSession } from '../../actions/coaching_session_actions';

class EditCoachingSession extends React.Component {
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
        form
      </div>
    );
  }
}


const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
  updateSession: (coachingSession) => dispatch(editCoachingSession(coachingSession)),
  // deleteSession: (coachingSession) => dispatch(deleteCoachingSession(coachingSession)),
});

export default connect(
  mapState, mapDispatch,
)(EditCoachingSession);
