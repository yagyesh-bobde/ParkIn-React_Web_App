import React from 'react'
import Navbar from './components/Navbar'
import ParkingState from './context/parkingState'
import Home from './pages/Home'

import './App.css'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='parent_app'>
      <Navbar />
      <ParkingState>
        <Home />
      </ParkingState>
      <Footer />
    </div>
  )
}

export default App
