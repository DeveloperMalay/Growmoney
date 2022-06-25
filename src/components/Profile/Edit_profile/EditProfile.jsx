import React, { useState } from "react";
import "./editprofile.scss";
import { motion } from "framer-motion";
import profile from "../../../assets/profile.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  let navigate = useNavigate();
  const [imagepreview, setImagePreview] = useState();
  const [profileData, setProfileData] = useState({
    FullName: "",
    UserName: "",
  });
  // to change profile picture
  const handleImagechange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleprofileChange = (e) => {
    setProfileData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
 

  const handlesubmit = (e) => {
    e.preventDefault();
    const editData = {
      profilepic: imagepreview,
      fullname: profileData.FullName,
      username: profileData.UserName,
    };
    console.log(editData);
    navigate("/home/profile");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="editprofile_container">
        <div className="container">
          <h1>EditProfile</h1>
          <form onSubmit={handlesubmit}>
            <div className="profile_pic">
              <input
                type="file"
                name="profile-picture"
                accept="image/*"
                multiple={false}
                onChange={handleImagechange}
              />
              <span>
                <BsFillPlusCircleFill />
              </span>
              <div className="previewPic">
                <img src={!imagepreview ? profile : imagepreview} />
              </div>
            </div>
            <input
              type="text"
              name="FullName"
              placeholder="Full Name"
              value={profileData.FullName}
              onChange={handleprofileChange}
            />
            <input
              type="text"
              name="UserName"
              placeholder="User Name"
              value={profileData.UserName}
              onChange={handleprofileChange}
            />
            <div className="btn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
