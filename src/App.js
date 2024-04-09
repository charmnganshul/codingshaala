import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import AccessYourself from './Pages/AccessYourself'
import Notes from './Pages/Notes'
import CSSNotes from './Pages/CSSNotes'
import Login from './Pages/Login'
import Subjects from './Pages/Subjects'
import Javascript from './Pages/Javascript'
import HTML from './Pages/HTML'
import CSS from './Pages/CSS'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/access-yourself' element={<AccessYourself/>}></Route>
        <Route path='/notes' element={<Notes/>}></Route>
        <Route path='/css-notes' element={<CSSNotes/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/subjects' element={<Subjects/>}></Route>
        <Route path='/javascript' element={<Javascript/>}></Route>
        <Route path='/html' element={<HTML/>}></Route>
        <Route path='/notes/css' element={<CSS/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
