import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { List, ListItem } from 'material-ui/List';
import Сheck from 'material-ui/svg-icons/action/check-circle';
import Uncheck from 'material-ui/svg-icons/notification/do-not-disturb-on';

@observer
export default class CheckList extends Component {
  
  render() {
    const { store } = this.props;
    const list = store.domainsState;
    
    return (
      <div>
        View only available domains
        <List>
          { list.map((domain, ndx) => 
            <ListItem
              key={ndx}
              primaryText={domain.name}
              rightIcon={ domain.available ? <Сheck/> : <Uncheck/> }
            />
          )}
        </List>
      </div>
    )
  }
}