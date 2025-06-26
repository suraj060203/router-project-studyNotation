import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg'
import toast from "react-hot-toast";

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
                        <button onClick={()=>{setIsLoggedIn(true); toast.success("Logged In")}}>Login</button>
                    </Link>
                }
                {  !isLoggedIn &&
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{setIsLoggedIn(false); toast.success("Logged Out")}} >Logout</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button >Dashboard</button>
                    </Link>
                }
                
            </div>
        </div>
    )
}

export default Navbar;