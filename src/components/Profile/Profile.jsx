import React from "react";
import "./profile.scss";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Profile = () => {
  let navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="profile_container">
        <div className="profile">
          <div className="profile_pic">
            <div className="image">
              <img src={profile} alt="" />
            </div>
            <div className="account">
              <p>Name:Adesh Yadav</p>
              <p>User Name:Adesh123</p>
            </div>
          </div>
          <div className="investnment_section">
            <div className="investment">
              <p>1800 Rs.</p>
              <p>Total Investment</p>
            </div>
            <div className="wallet">
              <p>2000 Rs.</p>
              <p>Wallet</p>
            </div>
          </div>
          <div className="btn">
            <div className="recharge_btn">
              <button>Recharge</button>
            </div>
            <div className="withdraw_btn">
              <button>Withdraw</button>
            </div>
          </div>
          <div className="profite_record"></div>
          <div className="recharge_record"></div>
          <div className="wallet_history"></div>
        </div>
        <div className="settings">
          <div
            className=" clk edit "
            onClick={() => {
              navigate("/home/editprofile");
            }}
          >
            <span>Edit Profile</span>
          </div>
          <div
            className=" clk change_password"
            onClick={() => {
              navigate("/resetpassword");
            }}
          >
            <span>Change Password</span>
          </div>
          <div className=" clk money_record">
            <span>Money Record </span>
          </div>
          <div className=" clk about_us">
            <span>About us</span>
          </div>
          <div className=" clk logout">
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
