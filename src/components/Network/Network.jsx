import React from "react";
import moneylogo from "../../assets/moneylogo.jpg";
import "./network.scss";
import { motion } from "framer-motion";

const Network = () => {
  const teamDetails = [
    {
      id: "1",
      memberName: "Adesh",
      menberNo: "7005454656",
      memberEmail: "adesh@gmail.com",
    },
    {
      id: "2",
      memberName: "Malay",
      menberNo: "7309309321",
      memberEmail: "malay@gmail.com",
    },
    {
      id: "3",
      memberName: "Adhi",
      menberNo: "7005458933",
      memberEmail: "adhi@gmail.com",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="network_container">
        <div className="logo_image">
          <img src={moneylogo} alt="moneylogo" />
        </div>
        <div className="refer_link">
          <div className="link">
            <p>Refer Link -</p>
            <input type="text" name="ref_link" />
            <button>Copy</button>
          </div>
          <div className="team_income">
            <span>Team Income: 1200 Rs.</span>
          </div>
        </div>
        <div className="team_table">
          <div className="team_heading">
            <div className="name">
              <span>Name</span>
            </div>
            <div className="mobile">
              <span>Mobile No</span>
            </div>
            <div className="email">
              <span>Email</span>
            </div>
          </div>
          <div className="teams">
            {teamDetails.map((item) => {
              return (
                <div className="team level1" key={item.id}>
                  <div className="name">{item.memberName}</div>
                  <div className="mobile">{item.menberNo}</div>
                  <div className="email">{item.memberEmail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Network;
