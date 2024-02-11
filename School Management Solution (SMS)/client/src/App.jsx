import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import QuizInstruction from './components/quiz/QuizInstruction/QuizInstruction'
import Test from './components/quiz/Test'
import axios from 'axios';
import { quiz } from '../quiz'
import Demo from './Demo'


function App() {


  return (
    <>
      <Home />
      <Test questions={quiz.questions} />
      {/* <QuizInstruction /> */}
      {/* <Demo/> */}


    </>
  )
}

export default App
