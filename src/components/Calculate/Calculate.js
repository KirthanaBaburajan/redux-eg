import React from "react";
import { connect } from "react-redux";
import { increment, addition, store, clear, reset } from "../../store/actions";
import "./Calculate.css";

const Calculate = (props) => {
  return (
    <div>
      <h3>{props.counter}</h3>
      <input
        type="number"
        placeholder="ADD"
        onBlur={(event) => {
          props.addHandler(event.target.value);
        }}
      />
      <br />
      <button onClick={props.incHandler}>INC</button>
      <button
        onClick={() => {
          props.storeHandler(props.counter);
        }}
      >
        STORE
      </button>
      <button onClick={props.resetHandler}>RESET</button>
      <button onClick={props.clearHandler}>CLEAR</button>
      <div>
        {props.results.map((result, index) => {
          return <h4 id={index}>{result}</h4>;
        })}
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    counter: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    incHandler: () => {
      dispatch(increment(1));
    },
    addHandler: (val) => {
      val = parseInt(val);
      val = Number.isNaN(val) ? 0 : val;
      dispatch(addition(val));
    },
    storeHandler: (val) => {
      val = parseInt(val);
      dispatch(store(val));
    },
    clearHandler: () => {
      dispatch(clear());
    },
    resetHandler: () => {
      dispatch(reset());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Calculate);
