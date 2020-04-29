import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// for testing
import { logIn, logOut, signUp } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;

  // end testing

  ReactDOM.render(<Root store={store} />, root);
});
