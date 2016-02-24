import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';  
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, HomeRoute, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, MemberHomePage, Add } from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <LogoutRoute path='/logout' />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
        <Route path='/member' component={MemberHomePage} />
        <Route path='/add' component={Add} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);