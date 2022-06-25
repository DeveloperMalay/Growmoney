import React from "react";
import profile from "../../assets/profile.png";
import moneylogo from "../../assets/moneylogo.jpg";
import "./home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="home_container">
        <div className="home">
          <div className="profile_card">
            <div className="profile_pic">
              <img src={profile} alt="" />
            </div>
            <div className="name">
              <h3>Name:Adesh Yadav</h3>
            </div>
            <div className="wallet">
              <h3>Wallet:1800 Rs.</h3>
            </div>
            <div className="profile_income">
              <div className="today">
                <h4>Today's Income</h4>
                <h5>1800 Rs.</h5>
              </div>
              <div className="weekly">
                <h4>Weekly Income</h4>
                <h5>1800 Rs.</h5>
              </div>
            </div>
          </div>
          <div className="subcriptions">
            <div className="subscription_card">
              <div className="subs_image">
                <img src={moneylogo} alt="" />
              </div>
              <div className="subs_details">
                <h3>Vip Level 1</h3>
                <p>
                  Invest:<span>1800 Rs.</span>
                </p>
                <p>
                  Daily Profit:<span>60 Rs.</span>
                </p>
                <p>
                  Weekly Profit:<span>1000 Rs.</span>
                </p>
                <p>
                  Plan Cycle:<span>200 Days</span>
                </p>
                <div className="subs_btn">
                  <span>Buy Now</span>
                </div>
              </div>
            </div>

            <div className="subscription_card">
              <div className="subs_image">
                <img src={moneylogo} alt="" />
              </div>
              <div className="subs_details">
                <h3>Vip Level 2</h3>
                <p>
                  Invest:<span>1800 Rs.</span>
                </p>
                <p>
                  Daily Profit:<span>60 Rs.</span>
                </p>
                <p>
                  Weekly Profit:<span>1000 Rs.</span>
                </p>
                <p>
                  Plan Cycle:<span>200 Days</span>
                </p>
                <div className="subs_btn">
                  <span>Buy Now</span>
                </div>
              </div>
            </div>

            <div className="subscription_card level3">
              <div className="subs_image">
                <img src={moneylogo} alt="" />
              </div>
              <div className="subs_details">
                <h3>Vip Level 3</h3>
                <p>
                  Invest:<span>1800 Rs.</span>
                </p>
                <p>
                  Daily Profit:<span>60 Rs.</span>
                </p>
                <p>
                  Weekly Profit:<span>1000 Rs.</span>
                </p>
                <p>
                  Plan Cycle:<span>200 Days</span>
                </p>
                <div className="subs_btn">
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
