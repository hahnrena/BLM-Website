import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.modules.scss';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    <Link to="/">
                        Home
                    </Link>
                </div>

                <div className='options'>
                <Link className='option' to="/allyship">
                        A Guide to Allyship
                    </Link>
                    <Link className='option' to="/social-media">
                        Using Social Media
                    </Link>
                    <Link className='option' to="/alt-actions">
                        Alternative Actions
                    </Link>
                    <Link className= 'option'to="/legal-counsel">
                        Seeking Legal Counseling
                    </Link>
                </div>
            </div>
            
            
        )
    }
};

export default Header;
