import React, { useContext } from 'react';
import Logo from'../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const singOut=()=>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error.message)
          });
    }
    return (
        <div>
          <header>
             <nav className='hearder'>
                    <a href="">
                        <img src={Logo} alt="" />
                    </a>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/orders">Order</Link></li>
                        <li><Link to="*">Order Review</Link></li>
                        {
                            user ?
                              <div><span>{user.email} </span> <button onClick={singOut}>LogOut</button></div>:
                             <button> <Link to="/login">Login</Link></button>
                        }
                    </ul>
                </div>
             </nav>
            </header> 
        </div>
    );
};

export default Header;