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

import { useSelector } from 'react-redux';
import AdminDashboard from './pages/Admin/AdminDashboard';


function App() {

  const RoleBasedRoute = ({ path, element }) => {
    const userRole = useSelector(state => state.user.role);
  
    // Conditionally render components based on user's role
    if (userRole === 'Admin' && path === '/admin') {
      return <Route path={path} element={element} />;
    } else if (userRole === 'Student' && path === '/student') {
      return <Route path={path} element={element} />;
    } else if (userRole === 'Teacher' && path === '/teacher') {
      return <Route path={path} element={element} />;
    } else {
      // If the user's role doesn't match any of the specified routes, navigate to a default route or show an error page.
      return <Navigate to="/" />;
    }
  };
  return (
    <>

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/chooseuser' element={<ChooseUser />} />
        <Route path='/admin' element={<Admin role="Admin" />} />
        <Route path='/student' element={<Student role="Student" />} />
        <Route path='/teacher' element={<Teacher role="Teacher" />} />

        <Route path='/admin/signup' element={<AdminSignup />} />
        <Route path='*' element={<Navigate to="/" />} />
      

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
