import { useState } from 'react'
import Home from './components/Home/Home'
import DestinationPage from './components/DestinationPage/DestinationPage';
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css'





const App = () => {
  const [params, setParams] = useState()
  const getUserParams = (params) => {
    setParams(params)
  }

  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home getUserParams={getUserParams} />} />
        <Route path="/destination" exact element={<DestinationPage userParams={params} />} />
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App
