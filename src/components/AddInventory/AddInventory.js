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
