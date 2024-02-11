import React, { useState, useEffect } from "react";
import Test from "../Test"; // Adjust the path based on your project structure

const Question = () => {
    const [quizzes, setQuizzes] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5000/home")
            .then((response => setQuizzes(response.data)))
            .catch((error) => console.log(error));

    }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

    // Assuming you want to pass the questions array from the first quiz to the QuestionsList component
    const questionsArray = quizzes.length > 0 ? quizzes[0].questions : [];

    return (
        <div>
            <h1>Quizzes</h1>
            {quizzes.map((quiz) => (
                <div key={quiz._id}>
                    {/* Render quiz details here */}
                </div>
            ))}

            {/* Pass the array of questions to the QuestionsList component */}
            <QuestionsList questions={questionsArray} />
        </div>
    );
};

export default Question;
