import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input name="city" placeholder="City" />
          <input name="country" placeholder="Country..."/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
};

export default Form;