//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [hScore, sethScore] = useState(0);
  const [aScore, setaScore] = useState(0);
  const homeTd = () => {
    sethScore(hScore + 7)
  }
  const homeFg = () => {
    sethScore(hScore +3)
  }
  const awayTd = () => {
    setaScore(aScore + 7)
  }
  const awayFg = () => {
    setaScore(aScore +3)
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{hScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{aScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {homeTd} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {homeFg} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {awayTd}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {awayFg}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
