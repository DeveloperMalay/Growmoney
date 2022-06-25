import React, { useState } from "react";
import "./Resetpassword.scss";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Resetpassword = () => {
  let navigate = useNavigate();
  const [data, setdata] = useState({
    previous_password: "",
    new_password: "",
  });

  const [showpassword, setShowpassword] = useState(true);
  const [showconfirmpassword, setShowconfirmpassword] = useState(true);
  const Show = () => {
    setShowpassword(!showpassword);
  };
  const ShowC = () => {
    setShowconfirmpassword(!showconfirmpassword);
  };

  const handleChange = (e) => {
    setdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="reset">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <form>
          <div className="container">
            <div className="password_logo">
              <span>
                <RiLockPasswordFill />
              </span>
            </div>
            <header>
              <h1>Create new password</h1>
            </header>
            <div className="p">
              Your new password must be different from previous used passwords.
            </div>
            <div className="items">
              <input
                type={showpassword ? "password" : "text"}
                name="previous_password"
                value={data.previous_password}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="previous_password"> Previous Password</label>
              <span className="password-icon" onClick={Show}>
                {showpassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="items">
              <input
                type={showconfirmpassword ? "password" : "text"}
                name="new_password"
                value={data.new_password}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="new_password">Confirm Password</label>
              <span className="password-icon" onClick={ShowC}>
                {showconfirmpassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div
              className="btn"
              onClick={() => {
                navigate("/home/profile");
              }}
            >
              <button>Reset Password</button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Resetpassword;
