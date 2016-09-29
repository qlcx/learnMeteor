import React, { Component } from 'react'

class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {error: ''};
  }

  handleSubmit(event) {
    //避免执行默认动作
    event.preventDefault();

    // imports/collections/links.js  funciton
    Meteor.call('links.insert', this.refs.link.value, error => {
      if (error) {
        this.setState({error: 'Enter a valid URL'});
        this.refs.link.value = '';
      } else {
        this.setState({ error: '' });
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>link to shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;