import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <h3 className='title'>Mern Blog</h3>
            <p className='logout'>Logout</p>
        </div>
    )
}

export default Header;