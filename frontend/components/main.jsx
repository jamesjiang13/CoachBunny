import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import NavigationBar from './nav_bar/nav_bar_container';
import Footer from './footer/footer';
import CoachingSessionsContainer from './coaching_sessions/coaching_sessions_container';
import { ProtectedRoute } from '../util/route_util';
import AccountContainer from './account/account_container';
import { fetchCoachingSessions } from '../actions/coaching_session_actions';
import { logOut } from '../actions/session_actions';
import classes from './main.module.css';
import SearchFields from './search/search_fields';

class Main extends React.Component {
  componentDidMount() {
    const { fetchCoachingSessions } = this.props;
    fetchCoachingSessions();
  }

  render() {
    return (
      <div className={classes.mainContainer}>
        <NavigationBar />
        <div className={classes.main}>
          <Switch>
            <ProtectedRoute path="/main/account" component={AccountContainer} />
            <ProtectedRoute path="/main/mysessions" component={CoachingSessionsContainer} />
            <ProtectedRoute path="/main" component={SearchFields} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapState = (state) => {
  return ({
    currentUser: state.entities.user[state.session.currentUserId],
  });
};

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logOut()),
  fetchCoachingSessions: () => dispatch(fetchCoachingSessions()),
});

export default connect(
  mapState, mapDispatch,
)(Main);
