import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Error from "./components/common/Error";
import Footer from "./components/common/Footer";
import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";
import Edit from "./pages/protected/Edit";
import Heart from "./pages/protected/Heart";
import Avatar from "./pages/protected/Avatar";
import Register from "./pages/Register";
import { HiH1 } from "react-icons/hi2";
import Protectedlayout from "./pages/protected/Protectedlayout";
import Profilelayout from "./pages/protected/profile/Profilelayout";
import Insta from "./pages/protected/profile/Insta";
import Replies from "./pages/protected/profile/Replies";
import Repost from "./pages/protected/profile/Repost";
import SinglePost from "./pages/protected/SinglePost";
import AddPost from "./components/modals/AddPost";
import EditProfile from "./components/modals/EditProfile";
import { useMyInfoQuery } from "./redux/service";
import { useSelector } from "react-redux";

const App = () => {
  const { myInfo } = useSelector((state) => state.service);
  const { data, isError } = useMyInfoQuery();
  if (isError || !data) {
    <Router>
      <Routes>
        <Route path="/*" element={<Register />} />
      </Routes>
    </Router>;
  }
  return (
    <>
      <Box minHeight={"100vh"}>
        <Router>
          <Routes>
            {myInfo ? (
              <Route exact path="/" element={<Protectedlayout />}>
                <Route exact path="" element={<Home />} />
                <Route exact path="post/:id" element={<SinglePost />} />
                <Route exact path="search" element={<Search />} />
                <Route exact path="avatar" element={<Avatar />} />
                <Route exact path="edit" element={<AddPost />} />

                <Route exact path="profile" element={<Profilelayout />}>
                  <Route exact path="insta" element={<Insta />} />
                  <Route exact path="replies/:id" element={<Replies />} />
                  <Route exact path="repost/:id" element={<Repost />} />
                </Route>
              </Route>
            ) : (
              // <Route exact path="/" element={<Register />} />
              <Route exact path="*" element={<Error />} />
            )}
          </Routes>
        </Router>
      </Box>
    </>
  );
};

export default App;
