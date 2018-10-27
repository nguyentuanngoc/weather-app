import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import SearchBar from './components/search-bar';
import WeatherInfo from './components/weather-info'

const APIKEY = "52d025ce03991bcf2c4ea0a3b493e259";
class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      city: undefined,
      temp: undefined,
      condition: undefined,
      description: undefined,
      isFound: undefined,
    }
  }
  
  async handleSubmit(userInput){
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&APPID=" + APIKEY).then(response => response.json());
    if(data.cod !== "404") {
      this.setState({
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        isFound: true,
    });
    }
    else {
      this.setState({isFound: false});
    }
  }

  render() {
    let backgroundChange = null;
    if (this.state.isFound === true) {
      backgroundChange =  {
        backgroundImage: "url(" + "https://source.unsplash.com/featured/random/?" + this.state.condition + ")", 
      };
    }
    return (
      <React.Fragment>
        <div id="background"><div id="background-image" style={backgroundChange}></div></div>
        <div id="content">
          <WeatherInfo data={this.state} />
          <SearchBar handleSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));