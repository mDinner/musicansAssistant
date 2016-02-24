import React from 'react';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/lib/TextField';
import { UserComponent } from 'react-stormpath';
import AddInstrument from './AddInstrument';
//export default TextField;

export default class Add extends UserComponent {
  onFormSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    var user = this.state.user;
    return (
      <DocumentTitle title={`Add`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <AddInstrument/>
               
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}