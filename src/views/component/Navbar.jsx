import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="d-flex justify-content-around m-2">
             <Link to="/registration" className="mt-3"> Sign Up </Link>
        </div>
    )
}

export default Navbar