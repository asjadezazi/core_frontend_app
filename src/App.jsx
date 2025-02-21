import React from 'react'
import Loader from './components/common/Loader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Error from './components/common/Error'
import Footer from './components/common/Footer'

const App = () => {
  return (

    <>
      <Router>
    <Header />
        <Routes>
          <Route exact path='/' element={<></>}/>
          <Route exact path='/home' element={<h1>Home</h1>} />
          <Route exact path='/search' element={<h1>search</h1>} />
          <Route exact path='/about' element={<h1>about</h1>} />
          <Route exact path='/contact' element={<h1>contact</h1>} />
          <Route  path='*' element={<Error/>} />
        </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App