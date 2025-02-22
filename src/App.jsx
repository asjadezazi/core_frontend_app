import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Error from './components/common/Error'
import Footer from './components/common/Footer'
import Home from './pages/protected/Home'
import Search from './pages/protected/Search'


const App = () => {
  return (

    <>
      <Router>
    <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/search' element={<Search/>} />
          <Route  path='*' element={<Error/>} />
        </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App