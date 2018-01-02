import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppForm from './AppForm';
import CheckList from './CheckList';
// import RandExp from 'randexp';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <h1>Domains checker</h1>
          <AppForm store={this.props.store} />
          <CheckList store={this.props.store} />
        </div>
      </MuiThemeProvider>
    );
  }
}