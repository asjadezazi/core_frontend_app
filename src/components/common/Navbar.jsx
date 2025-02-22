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
<TbEdit size={33} />
<CiHeart size={33} />
<RxAvatar size={33} />

    </Stack>
    </>
  )
}

export default Navbar