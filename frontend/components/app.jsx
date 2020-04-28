import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';

import NavBarContainer from './nav_bar/nav_bar_container';
import EntryPage from './session_form/entry_page';


const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route path="/entrypage" component={ EntryPage } />
  </div>
)

export default App;