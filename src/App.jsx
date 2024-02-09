import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css";
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Layourt/Header';
import Home from './Components/Layourt/Home/Home';
import Stockinventory from './Components/Stockinventory/Stockinventory';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar/>
      <div className="app-page-div">
        <section className="app-sidebar">
          <Sidebar/>
        </section>
        <section className="app-Home">
          <div className="header-div-fixed">
          <Header/>
          </div>
          <div className="home-layout">
            <div className="app-home-section">
          <Home/>
            </div>
          <div className="app-right-sidebar">
          <Stockinventory/>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App