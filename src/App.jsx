import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contacts from './Component/Contacts';
import Profile from './Component/Profile';
import Dashboard from './Component/Dashboard';




export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contacts' element={<Contacts />}/>
        <Route path='/Profile' element={<Profile />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
