import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css"
import logo from '../resources/banner.png';
const Signup = () => {
  return (
    <>
    
    
    <div className={styles.signup}>
      <div className={styles.box1}>
        <div className={styles.inner}>
          <h1>Signup</h1>

          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter Email" />

          <input type="text" placeholder="Enter Mobile Number" />
          <input type="text" placeholder="Enter Refer Code" />

          <button className={styles.btn1} type="submit">
            Signup
          </button>
          <p>Already have an account <Link to ="/">Login</Link></p>
          <img src="" alt="" />
        </div>
      </div>

      <div className={styles.imgs}></div>
    </div>
    </>
  );
};

export default Signup;
