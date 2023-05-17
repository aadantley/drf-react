import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch("localhost:8000/api/events/")
      .then((response) => {
        console.log(response);
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
        console.log(response.json());
      })
      .then((data) => {
        this.setState(() => {
          return {
            data: [...data],
            loaded: true,
          };
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map((events) => {
          return (
            <div key={events.id}>
              <h1>{events.title}</h1>
              <p>{events.details}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
