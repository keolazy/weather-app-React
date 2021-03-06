import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_KEY = "e952f7ce430503e397d8b4c21fda5ceb";

// Two kinds of components: Stateless Functional Components

class App extends React.Component {
  // State is an object that lives within a component.
  // Responsible for keeping track of changing data within a component 
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
    const data = await api_call.json();
    console.log(data);
    if(city && country) {
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
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/> 
                <Weather temperature={this.state.temperature}
                          city={this.state.city}
                          country={this.state.country}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          error={this.state.error}
          />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

