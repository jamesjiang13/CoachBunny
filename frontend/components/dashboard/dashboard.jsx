import React from 'react';
import { Switch } from 'react-router-dom';
import NavigationBar from '../nav_bar/nav_bar_container';
import Footer from '../footer/footer';
import CoachingSessionsContainer from '../coaching_sessions/coaching_sessions_container';
import { ProtectedRoute } from '../../util/route_util';
import AccountContainer from '../account/account_container';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchCoachingSessions } = this.props;
    fetchCoachingSessions();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          <Switch>
            <ProtectedRoute path="/account" component={AccountContainer} />
            <ProtectedRoute path="/dashboard" component={CoachingSessionsContainer} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
