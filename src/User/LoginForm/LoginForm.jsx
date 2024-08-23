import React from 'react';
import './LoginForm.css';
import { FaUser  } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";



export default function LoginForm() {
  return (
    <div className='container'>
     
      <form action="">
      <h1>Login</h1>
      <div className="input_box">
        <input type="text" placeholder='Username' required/>
        <FaUser className='icon' />
      </div>
      <div className="input_box">
        <input type="text" placeholder='MobileNumber' required/>
        <FaMobile className='icon' />
      </div>
      <button type='submit'>Login</button>
      <div className="register">
      {/* <p>Dont have account? <a href="">Register</a>   </p> */}

        <p>Dont have account? <span>Register</span> </p>
      </div>

      </form>
    </div>
  );
}
