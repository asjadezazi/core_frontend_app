import React from 'react'
import { InputAdornment, TextField } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';



const SearchInput = () => {
      const {darkMode} = useSelector((state)=>state.service)
  
  return (
    <>
    <TextField
    sx={{
        width:'90%',
        borderRadius:'15px',
        boxShadow:'5px 5px 5px gray',
        maxWidth:'750px',
        px:2,
        py:1,
        my:5,
        mx:'auto',
        bgcolor:"white"
        }

        
        }
        placeholder='Search-User'
       
        InputProps={{
            startAdornment: (
              <InputAdornment 
              position='start'
              sx={{
                color:'black'
            }}

              >
                   <FaSearch color={"black"}/>
              </InputAdornment>
            )
          }}
        />
    </>
  )
}

export default SearchInput