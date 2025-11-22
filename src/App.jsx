import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Orders from './Orders'
import NotFound from './NotFound'
import Footer from './Container/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App