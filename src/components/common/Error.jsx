import React from 'react'
import "./error.css"
import {Link} from "react-router-dom"; 


const Error = () => {
  return (
    <>
    <div className='main'>
    <h1 id='h1'>OOPS !</h1>
    <h2 id='h2'>404 - PAGE NOT FOUND</h2>
    <Link to={"/"}><button id='btn'>Go To HomePage</button></Link>
    </div>
    </>
  )
}

export default Error