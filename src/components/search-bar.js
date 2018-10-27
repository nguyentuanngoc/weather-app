import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    this.props.handleSubmit(form.get("user-input"));
  }
  
  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="user-input" placeholder="Enter city's name" autoComplete="off"></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}
