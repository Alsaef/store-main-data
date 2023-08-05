import React from 'react';
import Logo from'../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
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
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
             </nav>
            </header> 
        </div>
    );
};

export default Header;