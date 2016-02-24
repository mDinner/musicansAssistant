import React from 'react';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/lib/TextField';
import { UserComponent } from 'react-stormpath';
//export default TextField;

export default class MemberIndexPage extends UserComponent {
  onFormSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    var user = this.state.user;
    return (
      <DocumentTitle title={`Mucisians Assistant`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Popular </h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
               
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}