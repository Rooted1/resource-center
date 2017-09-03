import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
    constructor(props){
      super(props);
      this.state = {open : false};
      // this.handleToggle = this.handleToggle.bind(this);
    }

    // handleToggle() {
    //   this.setState = {open : true}
    // }
  render() {
    return (
      <div className="App">
        <AppBar
          title="Resource Center App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap = {()=> this.setState({open : true})}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>List 1</MenuItem>
          <MenuItem>List 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
