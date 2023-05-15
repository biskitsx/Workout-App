import React from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

function Navbar() {
    const auth = Cookies.get("auth")
    console.log(auth)
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/signup">SIGNUP</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Navbar