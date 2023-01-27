import React from 'react';

import Scores from './Scores';

function Student({ stu }) {
  return (
    <div className="studentsdata">
      {stu.map((data, idx) => {
        const { name, bio, scores } = data;
        return (
          <div key={idx} className="student">
            <h3 className="title">{name}</h3>
            <p className="para">{bio}</p>
            <div className="scoreboard">
              <Scores score={scores} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Student;
