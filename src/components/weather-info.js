import React, { Component } from 'react'

export default class WeatherInfo extends Component {
  
  render() {
    let info = null;
    let isFound = this.props.data.isFound;
    if(isFound === true) {
      info = <div className="info">
        <span id="city">{this.props.data.city}</span>
        <span id="temp">{Math.round(this.props.data.temp - 273.15)} &deg;C</span>
        <span id="description">{this.props.data.description}</span>
      </div>;
    }
    else if(isFound === false) info = <span className="info not-found">City not found</span>;
    else;
    return (
      info
    )
  }
}
