import React from "react"
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">HomePage</Link>
                <Link to="/favoritebooks">FavoriteBook</Link>
                <Link className='navtxt' to='/About'><div >About</div></Link>

            </li>
        </ul>
    )
}
export default Navbar
