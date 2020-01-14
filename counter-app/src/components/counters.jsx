import React, { Component, Fragment } from "react";

// components
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters - Rendered");
    return (
      <Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </Fragment>
    );
  }
}

export default Counters;
