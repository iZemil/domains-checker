import React, { Component } from 'react';
import {observer} from 'mobx-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

@observer
export default class AppForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const inputValues = e.target.elements.input.value;
    this.props.store.dispatch(inputValues);
  }

  render() {
    const { store } = this.props;
    
    return (
      <form className="app-form" onSubmit={this.handleSubmit.bind(this)} >
        <TextField fullWidth={true} multiLine={true} hintText="Write domains by commas..." autoComplete="on" name="input" />
        { store.domainZonesChecker.map((zone, ndx) => 
          <Checkbox
            key={ndx}
            label={zone.name}
            checked={zone.isChecked}
            onCheck={ () => store.updateZone(ndx) }
          />) }
        <RaisedButton fullWidth={true} label="Check" type="submit" />
      </form>
    );
  }
}