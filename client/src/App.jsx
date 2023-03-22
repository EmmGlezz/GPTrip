import { useState } from 'react'
import Home from './components/Home/Home'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'





const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
