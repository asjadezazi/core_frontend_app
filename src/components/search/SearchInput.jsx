import React from 'react'
import { InputAdornment, TextField } from '@mui/material';
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  return (
    <>
    <TextField sx={{
        width:'90%',
        borderRadius:'15px',
        boxShadow:'5px 5px 5px gray',
        maxWidth:'750px',
        px:2,
        py:1,
        my:5,
        mx:'auto',
        

        }
        }
        placeholder='Search-User'
        // inputProps={{
        //     startAdornment : (
        //         <InputAdornment
        //         position='start'
        //         sx={{
        //             color:'black'
        //         }}
        //         >
        //             <FaSearch />
        //         </InputAdornment>
        //     )
        // }}
        InputProps={{
            startAdornment: (
              <InputAdornment 
              position='start'
              sx={{
                color:'black'
            }}
              >
                   <FaSearch />
              </InputAdornment>
            )
          }}
        />
    </>
  )
}

export default SearchInput