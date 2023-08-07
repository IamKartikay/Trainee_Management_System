import React from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MangSys from './pages/MangSys'
import AddTrainee from './pages/AddTrainee'
import ShowTrainee from './pages/ShowTrainee'

const App = () => {
  return (
    <>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/DESIDOC_Management_System' element={<MangSys/>}/>
            <Route path='/addTrainee' element={<AddTrainee/>}/>
            <Route path='/showTrainee' element={<ShowTrainee/>}/>
        </Routes>    
    </>
  )
}

export default App