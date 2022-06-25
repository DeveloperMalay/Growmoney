import React from "react";
import "./Navbar.scss";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
  BsPersonCircle,
  BsSearch,
  BsPerson,
  BsPeopleFill,
} from "react-icons/bs";
import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const list = document.querySelectorAll(".list");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  }
  list.forEach((item) => {
    item.addEventListener("click", activeLink);
  });

  return (
    <>
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={logo} alt="" />
        </div>
        <div className="icons">
          <div
            className="home"
            onClick={() => {
              navigate("/home");
            }}
          >
            <span>
              <AiFillHome />
            </span>
            <p>Home</p>
          </div>
          <div
            className="network"
            onClick={() => {
              navigate("/home/network");
            }}
          >
            <span>
              <BsPeopleFill />
            </span>
            <p>Network</p>
          </div>
          <div
            className="profile"
            onClick={() => {
              navigate("/home/profile");
            }}
          >
            <span>
              <BsPersonCircle />
            </span>
            <p>Profile</p>
          </div>
        </div>
      </nav>
      <div className="bottom-navigation">
        <ul>
          <li className="list active">
            <Link to="/home">
              <span className="icon">
                <AiOutlineHome />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li className="list active">
            <Link to="/home/network">
              <span className="icon">
                <BsPeopleFill />
              </span>
              <span className="text">Search</span>
            </Link>
          </li>
          <li className="list">
            <Link to={"/home/profile"}>
              <span className="icon">
                <BsPerson />
              </span>
              <span className="text">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

{
  /* <div className="mobile-bottom-navbar">
  <ul>
    <li className="list active" onClick={activeLink}>
      <Link to="/home">
        <span className="icon">
          <AiOutlineHome />
        </span>
        <span className="text">Home</span>
      </Link>
    </li>
    <li className="list " onClick={activeLink}>
      <Link to="/home/search">
        <span className="icon">
          <BsSearch />
        </span>
        <span className="text">Search</span>
      </Link>
    </li>
    <li className="list" onClick={activeLink}>
      <Link
        to={
          userindefier === "customer"
            ? "/home/customerprofile"
            : "/home/shopprofile"
        }
      >
        <span className="icon">
          <BsPerson />
        </span>
        <span className="text">Profile</span>
      </Link>
    </li>
    <div className="indicator"></div>
  </ul>
</div> */
}
