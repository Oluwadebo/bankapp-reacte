import React from 'react'
import {Link} from 'react-router-dom'
import svgexport1 from './assets/pic/svgexport-1.png'
const Navbar = () => {
    let myStyle = {
        fontSize:'20px',
    }
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light fixed-top shadow">
            <div class="container">
                <img src={svgexport1} alt="" className='img-fluid'/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item px-3">
                        <Link to="/" class="nav-link text-dark" aria-current="page" style={myStyle}>Mini POS</Link>
                    </li>
                    <li class="nav-item px-3">
                        <Link to="/" class="nav-link text-dark" style={myStyle}>Merchants</Link>
                    </li>
                    <li class="nav-item px-3">
                        <Link to="/" class="nav-link text-dark" style={myStyle}>Documentation</Link>
                    </li>
                    <li class="nav-item px-3 dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={myStyle}>Company</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item py-2 px-4" href="#">About Us</a></li>
                            <li><a class="dropdown-item py-2 px-4" href="#">Blog</a></li>
                            <li><a class="dropdown-item py-2 px-4" href="#">Contact Us</a></li>
                            <li><a class="dropdown-item py-2 px-4" href="#">Press & Media</a></li>
                        </ul>
                    </li>
                    <li class="nav-item px-3 dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={myStyle}>Join Us</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item py-2 px-4" href="#">Graduates</a></li>
                            <li><a class="dropdown-item py-2 px-4" href="#">Experienced</a></li>
                        </ul>
                    </li>
                </ul>
                <span class="navbar-text">
                    <Link to="/signUp"><button className='btn form-control' style={{background:'#1FC69D',border:'none'}}>Create User Account</button></Link>
                </span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar