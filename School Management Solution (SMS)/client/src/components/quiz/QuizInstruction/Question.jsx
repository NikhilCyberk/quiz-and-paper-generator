import React, { useState, useEffect } from "react";
import "./Question.css"


const Question = ({ handleButtonClick, questions }) => {


    return (
        <div>
            <div className="question_button_container">
                <ul>
                    {questions.map((question, questionIndex) => (
                        <li key={question._id}>
                            <button onClick={() => handleButtonClick(questionIndex + 1)}>
                                 {questionIndex + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Question;
