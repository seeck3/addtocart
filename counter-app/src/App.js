import React, { Fragment, Component } from "react";
import "./App.css";

// components
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 2
      },
      {
        id: 4,
        value: 7
      }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }
  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }
  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <Fragment>
        <NavBar
          totalCounter={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handIncrement}
            counters={this.state.counters}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
