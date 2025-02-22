import {Stack} from "@mui/material";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import {Link} from "react-router-dom"; 



const Navbar = () => {
  return (
    <>
    <Stack 
    flexDirection={"row"}
    maxWidth={"100%"}
    justifyContent={"space-around"}
    alignItems={"center"}
    
    >
<Link to={"/"}><GoHome size={33}/></Link>
<Link to={"/search"}><IoIosSearch size={33} /></Link>
<Link to={"edit"}> <TbEdit size={33}/></Link>
<Link to={"/heart"}> <CiHeart size={33}/></Link>
<Link to={"/avatar"}> <RxAvatar  size={33} /></Link>

    </Stack> 
    </>
  )
}

export default Navbar