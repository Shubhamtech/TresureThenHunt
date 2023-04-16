import React from "react";
import {Link} from "react-router-dom";
const Nav=()=>{
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>

                <li><Link to="/logout">LogOut</Link></li>
                {/* <li><Link to="/clue1">clue1</Link></li> */}
                
                
            </ul>
        </div>
    );
}
export default Nav;