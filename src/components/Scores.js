import React from 'react';

function Scores({ score }) {
  return (
    <div>
      <h2>Scores</h2>
      {score.map((sco, id) => (
        // const { date, score } = sco;
        // return (
        <div key={id} className="score">
          <div className="date">{sco.date}</div>
          <div className="sco">{sco.score}</div>
        </div>
        // );
      ))}
    </div>
  );
}

export default Scores;
