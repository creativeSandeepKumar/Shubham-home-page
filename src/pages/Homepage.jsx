import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Components/Layourt/Home/Home'
import Stockinventory from '../Components/Stockinventory/Stockinventory'

const Homepage = () => {
  return (
    <div className='home-layout'>
            <div className="app-home-section">
          <Home/>
            </div>
          <div className="app-right-sidebar">
          <Stockinventory/>
          </div>
    </div>
  )
}

export default Homepage