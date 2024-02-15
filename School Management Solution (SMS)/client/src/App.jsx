// import { useState, useEffect } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import Home from './components/Home/Home'
// import QuizInstruction from './components/quiz/QuizInstruction/QuizInstruction'
// import Test from './components/quiz/Test'
// import axios from 'axios';
// import { quiz } from '../quiz'
// import Demo from './Demo'
import Homepage from './pages/Homepage'
import ChooseUser from './pages/ChooseUser';
import Admin from './pages/Admin/Admin';
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import AdminSignup from './pages/Admin/AdminSignup';


function App() {



  return (
    <>

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/chooseuser' element={<ChooseUser />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/signup' element={<AdminSignup />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Teacher />} />

      </Routes>




      {/* <Home /> */}
      {/* <ChooseUser /> */}
      {/* <Test questions={quiz.questions} /> */}
      {/* <QuizInstruction /> */}
      {/* <Demo/> */}



    </>
  )
}

export default App
