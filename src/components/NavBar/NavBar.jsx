import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
        <Link to='/'  className='NavBar-link'>HOME</Link>
        &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
        <Link to='/favoritePage'  className='NavBar-link'>MY IMAGES</Link>
        &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
        <span className='NavBar-link'>WELCOME - {props.user.name}</span>
        &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        </div>
        :
        <div>
        <Link to='/signin' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;

    return (
        <div className='NavBar'>
        {nav}
        </div>
    );
};

export default NavBar