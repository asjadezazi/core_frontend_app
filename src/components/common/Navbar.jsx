import { Stack } from "@mui/material";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {addPostModal, toggleColorMode} from "../../redux/slice"

const Navbar = () => {
  const {darkMode} = useSelector((state)=>state.service)
  const dispatch = useDispatch()
  const handleAddPost = () => {
    dispatch(addPostModal(true))
  };
  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        bgcolor={darkMode ? "black" : "white"}
        p={4}
      >
        <Link to={"/"}>
          <GoHome size={33} color={darkMode ? "white" : "black"}/>
        </Link>
        <Link to={"/search"}>
          <IoIosSearch size={33} color={darkMode ? "white" : "black"}/>
        </Link>
        <Link to={"edit"}>
          {" "}
          <TbEdit size={33} onClick={handleAddPost} color={darkMode ? "white" : "black"}/>
        </Link>
        <Link to={"/heart"}>
          {" "}
          <CiHeart size={33} color={darkMode ? "white" : "black"}/>
        </Link>
        <Link to={"/avatar"}>
          {" "}
          <RxAvatar size={33} color={darkMode ? "white" : "black"}/>
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
