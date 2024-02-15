import { useState, useEffect } from "react";
import "./Test.css";
import { resultInitialState } from "../../../quiz";
import axios from "axios";
import Question from "./QuizInstruction/Question";


export default function Test({ questions }) {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [answerIdx, setanswerIdx] = useState(null);
    const [answer, setanswer] = useState(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);
    const { question, choices, correctAnswer } = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setanswerIdx(index);
        if (answer === correctAnswer) {
            setanswer(true);
        } else {
            setanswer(false);
        }
    };

    const onClickNext = () => {
        setanswerIdx(null);
        setResult((prev) =>
            answer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswer: prev.correctAnswer + 1,
                } : {
                    ...prev,
                    wrongAnswer: prev.wrongAnswer + 1,
                }
        );
        if (currentQuestion !== questions.length - 1) {
            setcurrentQuestion((prev) => prev + 1);
        } else {
            setcurrentQuestion(0);
            setShowResult(true);
        }

    };
    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    }
    // console.log({ question });

    const handleButtonClick = (questionIndex) => {
        setcurrentQuestion(questionIndex - 1);
        setanswerIdx(null); // Reset answer index when switching questions
    };

    return (
        <>

            <div className="quiz-container">
                {!showResult ? (<>
                    <div className="right-column">
                        <div className="question-details">
                            <span className="active-question-no">{currentQuestion + 1}</span>
                            <span className="total-question">/{questions.length}</span>
                            <h2 className="mcqs-question">{question}</h2>
                            <ul className="mcqs-container">
                                {choices.map((choice, index) => (
                                    <li
                                        onClick={() => onAnswerClick(choice, index)}
                                        key={choice}
                                        className={answerIdx === index ? "selected-answer" : null}
                                    >
                                        {choice}
                                    </li>
                                ))}
                            </ul>
                            <div className="next-finish-btn">
                                <button onClick={onClickNext} disabled={answerIdx === null}>
                                    {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="question-container">
                        <Question handleButtonClick={handleButtonClick} questions={questions} />
                    </div>
                </>
                ) : <div className="result">
                    <h3>Result</h3>
                    <p>Total Question:<span>{questions.length}</span></p>
                    <p>Total Score:<span>{result.score}</span></p>
                    <p>Correct Answers: <span>{result.correctAnswer}</span></p>
                    <p>Wrong Answers:  <span> {result.wrongAnswer}</span></p>
                    <button onClick={onTryAgain}>Try Button</button>
                </div>
                }

            </div >
        </>
    );
}
