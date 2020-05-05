import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form/login_form_container';
import SignupFormContainer from './session_form/signup_form/signup_form_container';
import Main from './main';
import Splash from './splash/splash';
import EntryPage from './session_form/entry_page';
import CoachingSessionSearchContainer from './coaching_session_search/coaching_session_search_container';

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
      <ProtectedRoute path="/main" component={Main} />
      <ProtectedRoute path="/sports/:id" component={CoachingSessionSearchContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
