import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.module.css'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
