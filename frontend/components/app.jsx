import React from 'react';
import {
  Route,
  // Redirect,
  Switch,
  // Link,
  // HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import UserContainer from './user_account/user_container';
import LoginFormContainer from './session_form/login_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import NavBarContainer from './nav_bar/nav_bar_container';
import EntryPage from './session_form/entry_page';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/entrypage" component={EntryPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={NavBarContainer} />
      <Route path="/user" component={UserContainer} />
    </Switch>
  </div>
);

export default App;
