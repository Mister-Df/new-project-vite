import React from 'react'
import Burgerpage from './componernt/Burgerpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import MenuNavbar from './componernt/pagemenu/MenuNavbar'

export default function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Burgerpage />}/>
      </Routes> */}
      <Burgerpage />
    </div>
  )
}
