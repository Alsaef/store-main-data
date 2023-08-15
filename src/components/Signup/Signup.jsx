import React, { useContext, useState } from 'react';
import './Singup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handelSingUp=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confrom=event.target.confrom.value;
        console.log(email,password,confrom)

        // confrom password
        if (password !== confrom) {
            setError("Password Not Match Try Agin")
            return
        }
        else if(password.length < 6){
            setError('Type 6 Creacters Password')
        }
        createUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            setError('')
          })
          .catch((error)=>{
            console.log(error.message)
            setError(error.message)
          })
    }
    return (
        <div>
            <div>
            <div className='formContainer'>
            <form onSubmit={handelSingUp}>
            <h2>Sign Up</h2>
               <div className='flex'>
               <label htmlFor="">Email</label> 
                <input type="email" name='email' required/> 
                <label htmlFor="">Password</label> 
                <input type="password" name='password' required />
                <label htmlFor="">Confrom Password </label> 
                <input type="password" name='confrom' required />
                <p className='error'>{error}</p>
                <button type='submit'>Sign Up</button>
               </div>
            </form>
            <p>Already have an account? <Link to='/login' className='link'>Login</Link></p>
            </div>
        </div>  
        </div>
    );
};

export default Signup;