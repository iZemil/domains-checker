import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import RandExp from 'randexp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  regExpArr(str) {
    let arr = [];
    for(let i = 0; i < 100; i++) {
      let value = new RandExp(str).gen();
      if(arr.indexOf(value)) {
        arr.push(value)
      }
    }

    return arr;
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.elements.input.value;

    const myHeaders = new Headers();
    myHeaders.append("X-Mashape-Key", "szMTumFEGbmshkxupM5vr12ennkCp1DGwP9jsnlxJ65UntmCOr");
    const init = {
      method: 'GET',
      headers: myHeaders
    };
    // const url = `https://whois-v0.p.mashape.com/check?domain=$`
    const urls = [
      "https://whois-v0.p.mashape.com/check?domain=1z.ru",
      "https://whois-v0.p.mashape.com/check?domain=2z.ru",
      "https://whois-v0.p.mashape.com/check?domain=3z.ru",
      "https://whois-v0.p.mashape.com/check?domain=zdix777.ru"
    ];
    
    const grabContent = url => fetch(url, init)
      .then(res => res.json())
      .then(data => {
        console.log(url.slice(44), data.available)
      })
      .catch((error) => console.log(`Error: ${error}`) )
    
    
    Promise.all(urls.map(grabContent))
    
    grabContent(urls);

    // this.setState({
    //   list: newVal
    // });
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    const { list } = this.state;
    const zones = ['com', 'ru'];
    
    return (
      <form className="app-form" onSubmit={this.handleSubmit.bind(this)} >
        <TextField fullWidth={true} multiLine={true} hintText="Write domains by commas..." autoComplete="on" name="input" />
        { zones.map((checkbox, ndx) => 
          <Checkbox
            key={ndx}
            label={checkbox}
            checked={this.state.checked}
            onCheck={this.updateCheck.bind(this)}
          />) }
        <RaisedButton fullWidth={true} label="Check" type="submit" />
      </form>
    );
  }
}