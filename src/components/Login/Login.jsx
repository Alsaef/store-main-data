import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const [show,setShow]=useState(true)
    const {SingIn}=useContext(AuthContext)
    const navigate=useNavigate()
    let location = useLocation();
    const from=location.state?.from?.pathname||'/'
    const loginSubmit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        SingIn(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            event.target.reset()
            navigate(from,{replace:true})
          })
          .catch((error)=>{
            console.log(error.message)
          })
          
    }
    return (
        <div>
            <div className='formContainer'>
            <form onSubmit={loginSubmit}>
            <h2>login</h2>
               <div className='flex'>
               <label htmlFor="">Email</label> 
                <input type="email" name='email' required/> 
                <label htmlFor="">Password</label> 
     <div>
     <input type={show ? "text":"password"} name='password' required />
                <p onClick={()=>setShow(!show)}>
        {show ? 'Hide Password' : 'Show Password'}
      </p>
     </div>
                <button type='submit'>Login</button>
               </div>
            </form>
            <p>New to Ema-john? <Link to='/singup' className='link'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;