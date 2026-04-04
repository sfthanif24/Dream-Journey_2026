import React from "react";
import { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updateSixes = sixes + 1;
    setRuns(updatedRuns);
    setSixes(updateSixes);
  };
  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <h1>Score: {runs}</h1>
      <p>
        <small>Six: {sixes}</small>
      </p>
      {runs > 50 && <p>Congratulation!! You Score Fifty</p>}
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};

export default Batsman;
