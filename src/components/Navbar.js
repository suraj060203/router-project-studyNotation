import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg'

const Navbar = (props)=>{
        let { isLoggedIn, setIsLoggedIn } = props;
    

    return(
        
        <div className='flex justify-evenly'>
            <Link to="/">
                <img src={logo} alt="logo" loading="lazy" height={32} width={160}/>
            </Link>

            <nav >
                <ul className='flex gap-3' >
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/" >About</Link>
                    </li>
                    <li>
                        <Link to="/" >Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - Signup - Logout - Dashboard */}
            <div className='flex ml-3 mr-3 gap-3'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                {  !isLoggedIn &&
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                }
                
            </div>
        </div>
    )
}

export default Navbar;