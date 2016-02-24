import React from 'react';
import DocumentTitle from 'react-document-title';

import TextField from 'material-ui/lib/TextField';

import { UserComponent } from 'react-stormpath';

export default TextField;

export default class ProfilePage extends UserComponent {
  onFormSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    var user = this.state.user;
    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <form className="form-horizontal" submit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                  <label htlmFor="spFirstName" className="col-xs-12 col-sm-4 control-label">First Name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spFirstName" value={this.state.user.givenName} placeholder="First Name" disabled="true" />
                  </div>
                </div>
                <div className="form-group">
                  <label htlmFor="spLastName" className="col-xs-12 col-sm-4 control-label">Last Name</label>
                  <div className="col-xs-12 col-sm-4">
                    <input className="form-control" id="spLastName" value={this.state.user.surname} placeholder="Last Name" disabled="true" />
                  </div>
                </div>
                <div>
                  <TextField
                    hintText="Hint Text"
                  /><br/>
                  <br/>
                  <TextField
                    hintText="The hint text can be as long as you want, it will wrap."
                  /><br/>
                  <TextField
                    defaultValue="Default Value"
                  /><br/>
                  <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text"
                  /><br/>
                  <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                  /><br/>
                  <TextField
                    hintText="MultiLine with rows: 2 and rowsMax: 4"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                  /><br/>
                  <TextField
                    hintText="Message Field"
                    floatingLabelText="MultiLine and FloatingLabel"
                    multiLine={true}
                    rows={2}
                  />
                </div>
              

                <div className="form-group">
                  <div className="col-sm-offset-4 col-sm-4">
                    <button type="submit" className="btn btn-primary" disabled="true">Save (not supported yet)</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}