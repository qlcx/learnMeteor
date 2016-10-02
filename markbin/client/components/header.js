import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
  onBinclick(event) {
    event.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <nav className="nav nav-default">
        <div className="navbar-header">
          <a className="navbar-brand">Markbin</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinclick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>      
    );
  }
}

export default Header;