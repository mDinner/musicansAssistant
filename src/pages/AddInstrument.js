import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';
import AppBar from 'material-ui/lib/app-bar';

//import Css from './style.js';

var wrapStyle = { 
  border: '1px solid #666',
  minHeight: '450px'
};

//export default AppBarExampleIcon;
export default class AddInstrument extends React.Component {

  

  render() {
    return (
      <div className="AddInstrumentWrap" style={wrapStyle}>
        <AppBar title="New Instrument" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

      </div>
    );
  }
}