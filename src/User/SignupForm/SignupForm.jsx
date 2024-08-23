import React from 'react';
import './SignupForm.css';
import { FaUser  } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";


export default function SignupForm() {
  return (
    <div className='container'>
     
    <form action="">
    <h1>SignUp</h1>
    <div className="input_box">
      <input type="text" placeholder='Username' required/>
      <FaUser className='icon' />
    </div>

    <div className="input_box">
      <input type="number" placeholder='MobileNumber' required/>
      <FaMobile className='icon' />
    </div>

    <div className="input_box">
      <input type="text" placeholder='Email' required/>
      <MdEmail className='icon'/>

  
    </div>
    <div className="input_box">
      <input type="text" placeholder='Password' required/>
      <RiLockPasswordFill className='icon' />

    
    </div>
    <button type='submit'>SignUp</button>

    <div className="register">
      <p>Already have an account? <span>Login</span> </p>
    </div> 

    <hr/>
    <p className='or'>or</p>

    <div className="input_box0">
    <FcGoogle className='icon0'  />
     <p className='input1'> SignUp with Google</p>  

    
    </div>

    </form>
  </div>
  )
}
