import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wizard from './pages/Wizard'
import Resumen from './pages/Resumen'
import FinApp from './pages/FinApp' 

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wizard />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/finApp" element={<FinApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
