import React from 'react';
import {
  Route,
  // Redirect,
  // Switch,
  // Link,
  // HashRouter
} from 'react-router-dom';

import UserContainer from './user_account/user_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import NavBarContainer from './nav_bar/nav_bar_container';
import EntryPage from './session_form/entry_page';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route path="/entrypage" component={EntryPage} />
    <Route path="/user" component={UserContainer} />

  </div>
);

export default App;
