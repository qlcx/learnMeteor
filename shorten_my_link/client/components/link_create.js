import React, { Component } from 'react'

class LinkCreate extends Component {

  handleSubmit(event) {
    //避免执行默认动作
    event.preventDefault();

    // imports/collections/links.js  funciton
    Meteor.call('links.insert', this.refs.link.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>link to shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;