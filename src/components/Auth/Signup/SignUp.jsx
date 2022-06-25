import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [showpassword, setShowpassword] = useState(true);
  const [showconfirmpassword, setShowCondirmpassword] = useState(true);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Show = () => {
    setShowpassword(!showpassword);
  };
  const ShowC = () => {
    setShowCondirmpassword(!showconfirmpassword);
  };
  const handleChange = (event) => {
    setFormData((predata) => {
      return { ...predata, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonDisabled(true);
    navigate("/home");
    console.log(formData);
  };

  let navigate = useNavigate();

  return (
    <div className="SignUp">
      <span className="main-header">
        <img src={logo} alt="logo" />
      </span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form__container">
            <header>
              <h1>SignUp</h1>
            </header>

            <div className="form-item">
              <input
                type="text"
                name="name"
                value={formData.fullname}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="fullname"> Full Name*</label>
            </div>
            <div className="form-item">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="username"> Username*</label>
            </div>
            <div className="form-item">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <label htmlFor="email"> Email*</label>
            </div>
            <div className="form-item">
              <input
                type={showpassword ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
                required
              />

              <label htmlFor="password"> Password*</label>
              <span className="password-icon" onClick={Show}>
                {showpassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <div className="form-item">
              <input
                type={showpassword ? "password" : "text"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                autoComplete="off"
                required
              />

              <label htmlFor="confirm_password"> Confirm Password*</label>
              <span className="password-icon" onClick={ShowC}>
                {showconfirmpassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <div className="terms_condition">
              <input type="checkbox" name="terms-condition" required />
              <span>
                By creating an account you agree to our
                <a href="/">Terms & Privacy</a>
              </span>
            </div>
            <div className="btn">
              <button disabled={submitButtonDisabled}>SignUp</button>
            </div>
            <div className="log-in">
              <span>Already have an Account?</span>
              <span
                className="link"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/login");
                  }, [200]);
                }}
              >
                Login
              </span>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
