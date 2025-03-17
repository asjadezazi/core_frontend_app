import React from 'react'
import "./error.css"
// import {Link} from "react-router-dom"; 
import { useNavigate } from "react-router";


const Error = () => {
  let navigate = useNavigate();
  return (
    <>
    <div className='main'>
    <h1 id='h1'>OOPS !</h1>
    <h2 id='h2'>404 - PAGE NOT FOUND</h2>
    <button id='btn' onClick={() => {
        navigate(-1);
      }}>Go Back</button>
    </div>
    </>
  )
}

export default Error