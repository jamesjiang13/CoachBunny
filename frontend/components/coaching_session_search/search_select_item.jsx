import classes from './search_select_item.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { createCoachingSession } from '../../actions/coaching_session_actions';

class SearchSelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sport_id: '',
      coach_id: '',
      user_id: '',
      training_date: '',
      training_duration: '',
      training_rate: '',
      training_description: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm(this.state);
  }

  render() {
    debugger
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <button type="submit"> Reserve this Coach </button>
        </form>
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  debugger
};

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
