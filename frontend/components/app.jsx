import React from 'react';
import {
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form/login_form_container';
import SignupFormContainer from './session_form/signup_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
import EntryPage from './session_form/entry_page';

// Redirect auto-takes the user to the selected page
// Link takes a user to the select page onClick
// Switch only takes the first valid route
// HashRouter adds hashrouter

const App = () => (
  <div id="app">
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/entrypage" component={EntryPage} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute path="/" component={Splash} />
      {/* <Redirect exact path="/" to="/" /> */}
    </Switch>
  </div>
);

export default App;

// app -> dashboard -> all other user components, including navbar
// app -> entrypage -> login exactpath
// app -> entrypage -> signup exactpath
// app -splash //contain navbar
