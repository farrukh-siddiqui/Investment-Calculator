import { React, useState } from "react";
import "./Form.css";
const Form = (props) => {
  const dummyData = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 15,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(dummyData);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const ChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  const resetHandler = () => {
    setUserInput(dummyData);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(event) => {
              ChangeHandler("current-savings", event.target.value);
            }}
            id="current-savings"
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) => {
              ChangeHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) => {
              ChangeHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) => {
              ChangeHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
