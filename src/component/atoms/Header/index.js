import React from 'react';
import './header.scss';
import {useHistory} from 'react-router-dom';
const Header = () => {
    
    const history = useHistory();

    return (
        <div className='header-wrapper'>
            <div className='left'>
                <h3 className='title' onClick={() => history.push('/')}>MERN BLOG</h3>
            </div>
            <div className='right'>
                <p className='logout' onClick={() => history.push('/login')}>Logout</p>
            </div>
        </div>
    )
}

export default Header;