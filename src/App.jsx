// import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import QuizSetup from './pages/QuizSetup';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navbar';
import "./App.css"



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/quizsetup" element={<QuizSetup/>}/>
           <Route path="/quiz" element={<Quiz/>}/>
           <Route path="/result" element={<Result/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
