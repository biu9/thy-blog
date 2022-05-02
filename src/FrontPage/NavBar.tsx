import * as React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-left'>
                <Link to='/' className='nav-link'>
                    thy's blog
                </Link>
            </div>
            <div className='navbar-right'>
                <div className='navbar-right-item'>
                    home
                </div>
                <div className='navbar-right-item'>
                    projects
                </div>
                <div className='navbar-right-item'>
                    <Link to='/blogs' className='nav-link'>
                        blogs
                    </Link>
                </div>
                <div className='navbar-right-item'>
                    more
                </div>
            </div>
        </div>
    )
}

export default NavBar;