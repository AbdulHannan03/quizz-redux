import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  function checkAnswer() {
    let correctValue = state.questions[ind].answer;
    if (selectedValue === correctValue) {
      setScore(score + 1);
    }
    if (state.questions.length === ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }
  console.log(score);
  return (
    <div className="App shadow rounded container mt-5 p-5 bg-dark ">
      <div className="p-2">
        <div className="container">
          {showResult ? (
            <div className="p-3 bg-Success rounded shadow text-dark">
              <p className="fs-3">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={state.questions.length}
              ></progress>
              <h3>{((score / state.questions.length) * 100).toFixed(2)} %</h3>
              <h3>
                {(score / state.questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-primary text-white text-center">
            <p className="fs-4">
              Question Number <span className="fs-4">{ind + 1}</span> of{" "}
              {state.questions.length}
            </p>
            <h3>{state.questions[ind].question}</h3>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-info">
            <div className="row">
              {state.questions[ind].option.map((e, i) => {
                return (
                  <div key={i} className="col-md-3 text-center">
                    <button
                      className="btn btn-success p-2 my-2 rounded"
                      onClick={() => setSelectedValue(e)}
                    >
                      {e}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {!showResult ? (
          <div className="text-center  container">
            <button
              className="btn btn-danger px-5 rounded-pill"
              onClick={() => checkAnswer()}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
