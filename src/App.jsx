import React from 'react'
import Box from '@mui/material/Box';
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
import { HiH1 } from 'react-icons/hi2';
import Protectedlayout from './pages/protected/Protectedlayout';

const App = () => {
  return (

    <>
  <Box minHeight={"100vh"}>
     <Router>
      <Routes>
        <Route>

          <Route exact path='/' element = {<Protectedlayout/>} />
          <Route exact path='home' element = {<Home/>} />
          <Route exact path='post/:id' element = {<h1> Single Post </h1>} />
          <Route exact path='search' element = {<Search/>} />


        </Route>
      </Routes>
     </Router>
     
     </Box>
    </>
  )
}

export default App