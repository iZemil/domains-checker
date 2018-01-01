import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Сheck from 'material-ui/svg-icons/action/check-circle';
import Uncheck from 'material-ui/svg-icons/notification/do-not-disturb-on';

export default class CheckList extends Component {
  
  render() {
    const list = ['1.com', '1.ru'];

    return (
      <List>
        { list.map((domain, ndx) => 
          <ListItem
            key={ndx}
            primaryText={domain}
            rightIcon={<Uncheck />}
          />
        )}
      </List>
    )
  }
}