import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Error from './components/common/Error'
import Footer from './components/common/Footer'
import Home from './pages/protected/Home'
import Search from './pages/protected/Search'
import Edit from './pages/protected/Edit'
import Heart from './pages/protected/Heart'
import Avatar from './pages/protected/Avatar'
import Register from './pages/Register'

const App = () => {
  return (

    <>
      {/* <Router>
    <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/search' element={<Search/>} />
          <Route exact path='/edit' element={<Edit/>} />
          <Route exact path='/heart' element={<Heart/>}/>
          <Route exact path='/Avatar' element={<Avatar/>} />
          <Route  path='*' element={<Error/>} />
        </Routes>
      <Footer/>
      </Router> */}
<Register/>
    </>
  )
}

export default App