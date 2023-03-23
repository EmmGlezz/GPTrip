import { useState } from 'react'
import Home from './components/Home/Home'
import DestinationPage from './components/DestinationPage/DestinationPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'





const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/destination" exact element={<DestinationPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
