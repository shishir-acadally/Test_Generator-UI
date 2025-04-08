import React, { useState, useEffect } from "react";
import "../css/QuestionList.css";

const QuestionList = ({ questionIds, onQuestionSelect, taggedQuestions, reviewQuestions }: { questionIds: any, onQuestionSelect: any, taggedQuestions: any, reviewQuestions: any }) => {
  const [numberOfCompletedQuestions, setNumberOfCompletedQuestions] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  useEffect(() => {
    // Count the completed questions  
    let count = 0;
    Object.keys(questionIds).forEach((lu: any) => {
      // question.clone_question_ids.forEach((cloneId: any) => {
        count+= questionIds[lu].length;
    });
    setNumberOfCompletedQuestions(taggedQuestions.length);
    setNumberOfQuestions(count);
    console.log("COunts: ", numberOfCompletedQuestions, numberOfQuestions);
  }, [questionIds, taggedQuestions]);

  function questionStatus(cloneId: any) {
    if (reviewQuestions) {
      for (let index = 0; index < reviewQuestions.length; index++) {
        const element = reviewQuestions[index];
        if (element.ID == cloneId) {
          // console.log("reviewQuestions: " + cloneId);
          return "review";
        }
      }
      // reviewQuestions.forEach(element => {
        
      //   if (element.ID == cloneId) {
      //     console.log("reviewQuestions: " + cloneId);
      //     return "review";
      //   }
      // });
    }
    if (taggedQuestions && taggedQuestions.includes(cloneId)) {
      // console.log("highlighted: " + cloneId)

      return "highlighted";
    }
    else {
      return "";
    }
  }

  return (
    <div className="question-list">
      <h3>
        Questions: - {numberOfCompletedQuestions}/{numberOfQuestions}
      </h3>
      <ul className="question-list-ul">
        {Array.isArray(questionIds) && questionIds.length > 0 ? (
          questionIds.map(([lu, ids]) => (
            <li key={lu}>
              {lu}
              {ids.length > 0 && (
                <ul>
                  {ids.map((cloneId: any) => (
                    <li
                      key={cloneId}
                      // className={questionStatus(cloneId)}
                      // onClick={() => onQuestionSelect(cloneId, question.loname)}
                    >
                      {cloneId}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <li>No questions available</li>
        )}
      </ul>
    </div>
  );
};

export default QuestionList;