import React, { useEffect, useState } from 'react';
import './according.css';
import Data from './data';

const According = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(Data);
  }, []);

  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="main">
      <div className="title">Question And Answers About Login</div>
      <div className="content">
        <div className="box">
          {questions.map((q) => (
            <div className="colm" key={q.id}>
              <div className="head">
                <div className="bold">{q.title}</div>
                <button className="Pulsmines" onClick={() => toggleQuestion(q.id)}>
                  {openQuestionId === q.id ? '-' : '+'}
                </button>
              </div>
              {openQuestionId === q.id && <div className="txt">{q.info}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default According;
