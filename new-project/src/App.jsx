import React from 'react'
import Burgerpage from './componernt/Burgerpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuNavbar from './componernt/pagemenu/MenuNavbar'
import Error from './componernt/pagemenu/Error'
import Pricebar from './componernt/pagemenu/Pricebar'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from './componernt/pagemenu/products/product'

export default function App() {
  const products = useSelector(state => state.product)
  const disptch = useDispatch()
  
  if (!products.item) {
    disptch(getProduct())
  }


  return (
      <Routes>
        <Route path='/' element={<Burgerpage />}/>
        <Route path='navbar/:id' element={<MenuNavbar />}/>
        <Route path='*' element={<Error />}/>
        {/* <Route path='/navbar/:id/price' element={<Pricebar />}/> */}
      </Routes>
  )
}
