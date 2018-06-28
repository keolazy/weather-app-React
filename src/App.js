import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_KEY = "e952f7ce430503e397d8b4c21fda5ceb";

class App extends React.Component {
  // State is an object that lives within a component.
  // Responsible for keepign track of chagnign data within a component 
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Create own Method. arrow functions have this bound to App.
  getWeather = async (e) => {
    // prevents default behavior of button submitting;
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value; 
    // Make HTTP calls using 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // convert fetch response to JSON format
    const data = await api_call.json();
    console.log(data);
    // Props are like html attributes. name them whatever you want. set them as JS expressions.
    // Set values of state. Don't ever directly manipulate "state"
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/> 
        <Weather />
      </div>
    );
  }
}

export default App;
