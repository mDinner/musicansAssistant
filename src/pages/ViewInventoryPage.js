import React from 'react';
import DocumentTitle from 'react-document-title';


export default class ViewInventoryPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Inventory`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Inventory</h3>
              <hr />
            </div>
          </div>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
}
