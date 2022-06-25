import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignUp from "./components/Auth/Signup/SignUp";
import Login from "./components/Auth/Login/Login";
import Passwordresetmail from "./components/Auth/Passwordresetmail/Passwordresetmail";
import Checkemail from "./components/Auth/Passwordresetmail/Checkemail";
import Resetpassword from "./components/Auth/ResetPassword/Resetpassword";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Network from "./components/Network/Network";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/Edit_profile/EditProfile";

const App = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordresetmail" element={<Passwordresetmail />} />
            <Route path="/checkemail" element={<Checkemail />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/home" element={<Navbar />}>
              <Route path="" element={<Home />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="network" element={<Network />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default App;
