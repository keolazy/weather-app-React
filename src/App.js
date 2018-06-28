import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_KEY = "e952f7ce430503e397d8b4c21fda5ceb";

class App extends React.Component {
  // create own Method. arrow functions have this bound to App.
  getWeather = async (e) => {
    // prevents default behavior of button submitting;
    e.preventDefault(); 
    // Make HTTP calls using 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?Manchester,uk&appid=${API_KEY}&units=metric`)
    // convert fetch response to JSON format
    const data = await api_call.json();
    console.log(data);
    // Props are like html attributes. name them whatever you want. set them as JS expressions.
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
