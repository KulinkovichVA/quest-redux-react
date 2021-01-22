import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' }),
  onIncrement10: () => dispatch({ type: 'INCREMENT10' }),
  onDecrement10: () => dispatch({ type: 'DECREMENT10' }),
  onReset: () => dispatch({ type: 'RESET' }),
});

const CounterContainer = ({
  counter,
  onIncrement,
  onDecrement,
  onIncrement10,
  onDecrement10,
  onReset,
}) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement10}>Add 10</button>
      <button onClick={onDecrement10}>Remove 10</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
