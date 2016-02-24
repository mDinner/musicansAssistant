import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';
import AppBar from 'material-ui/lib/app-bar';

//export default AppBarExampleIcon;
export default class AddInstrument extends React.Component {
  render() {
    return (
      <div className="AddInstrument">
        <AppBar title="New Instrument" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

      </div>
    );
  }
}