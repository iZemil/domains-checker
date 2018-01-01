import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppForm from './AppForm';
import CheckList from './CheckList';
// import RandExp from 'randexp';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: 'generatedList'
    }
  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <h1>Domains checker</h1>
          <AppForm />
          <CheckList />
        </div>
      </MuiThemeProvider>
    );
  }
}