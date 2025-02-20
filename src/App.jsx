import React from 'react'
import Loader from './components/common/Loader'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Error from './components/common/Error'

const App = () => {
  return (
    <>
   <Router>
   <Header/>
    <Routes>
      <Route exact path ='/' element={<h1>Home</h1>}/>
      <Route exact path ='/search' element={<h1>search</h1>}/>
      <Route exact path ='/about' element={<h1>about</h1>}/>
      <Route exact path ='/contact' element={<h1>contack</h1>}/>
      <Route  path ='*' element={<h1>OOP'S bhai aap galat location pr ho</h1>}/>


</Routes>
<h1>this is my footer</h1>
   </Router>
   <Error/>
   </>

  )
}

export default App