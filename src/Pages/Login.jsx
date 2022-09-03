import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/action'
import styles from "./Login.module.css"
import logo from '../resources/img1.png';
import playStore from '../resources/playStore.png';
import appStore from '../resources/appStore.png';
import { POST_LOGIN_SUCCESS } from '../Redux/action.type';
import {  Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const isAuth=useSelector((state)=>state.isAuth)

  const dispatch=useDispatch()

  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const navigate=useNavigate()

  

  const handleSubmit=(e)=>{
    e.preventDefault()
    const payload={
      username:username,
      password:password
    }
      dispatch(login(payload)).then((r)=>{
        
        if(r.type==POST_LOGIN_SUCCESS){
          alert("Login Success")
          navigate("/signup")
        }
        else{
          alert("Invaild User")
        }

      })

    

  }
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.inner}>
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className={styles.btn1} type="submit" >Login</button>
        </form>
        
        <button className={styles.btn1}>Send OTP</button>
        <br />
         <button className={styles.btn2}>Login with Email</button>
         <p>Don't have an account?<Link to="/signup">Signup</Link> </p>
         </div>
      </div>

      <div className={styles.imgs}>
        <img src={logo} alt="" />
        <img className={styles.store} src={playStore} alt="" />
        <img className={styles.store} src={appStore} alt="" />
      </div>
    </div>
  )
}

export default Login