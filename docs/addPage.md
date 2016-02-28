How to add a new page:

For this example we're adding the AddPage

Step #1:
add this line to src/routes.js
on('/add', async () => <AddInventory />);

Step #2:
add folder to /src/components called '/AddInventory'

Step #3:
Add 3 files to /src/components/AddInventory called:

PAGE #1

AddInventory.js 

*use this code: *

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AddInventory.scss';

const title = 'Add Inventory';

class AddInventory extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>Add Instrument</p>
          <p>Add Equipment</p>
        </div>
      </div>
    );
  }

}

export default withStyles(AddInventory, s);

*** end code ***


PAGE #2

AddInventory.scss
* use this code: *

@import '../variables.scss';

.root {
	
}

*** end code ***

PAGE #3
package.json
* use this code: *
{
  "name": "AddInventory",
  "version": "0.0.0",
  "private": true,
  "main": "./AddInventory.js"
}

*** end code *** 


Step #4:




Step #5:
Step #6:

