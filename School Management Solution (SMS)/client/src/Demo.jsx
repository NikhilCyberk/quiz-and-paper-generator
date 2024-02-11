import React, { useState, useEffect } from "react";
import axios from "axios";

const Demo = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/home")
            .then((response => setQuizzes(response.data)))
            .catch((error) => console.log(error));

    }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

    return (
        <div>
            <h1>Quizzes</h1>
            {quizzes.map((quiz) => (
                <div key={quiz._id}>
                    <h2>{quiz.topic}</h2>
                    <p>Level: {quiz.level}</p>
                    <p>Total Questions: {quiz.totalQuestions}</p>
                    <p>Per Question Score: {quiz.perQuestionScore}</p>
                    <ul>
                        {quiz.questions.map((question) => (
                            <li key={question._id}>
                                <p>{question.question}</p>
                                <ul>
                                    {question.choices.map((choice, index) => (
                                        <li key={index}>{choice}</li>
                                    ))}
                                </ul>
                                <p>Type: {question.type}</p>
                                <p>Correct Answer: {question.correctAnswer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Demo;
