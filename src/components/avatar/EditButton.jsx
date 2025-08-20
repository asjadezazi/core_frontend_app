import React from 'react'
import { Button } from '@mui/material'
import { editProfileModal } from '../../redux/slice'
import { useDispatch } from 'react-redux'

const EditButton = () => {
  const dispatch = useDispatch();
  const handleOpenProfile = () =>{
    dispatch(editProfileModal(true))
  }

  return (
   <>
   <Button size='28' sx={{border:"2px solid gray" , color:"gray" , fontWeight:"bold" , fontSize:17}} onClick={handleOpenProfile}>Edit</Button>
   </>
  )
}

export default EditButton
