import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='nav-style'>
            <h2>My Food Mart</h2>
            <div>
                <a href="./search">Search Food </a>
                <a href="./details"> Details</a>
                <a href="./reviews">Reviews</a>
                <a href="./about us">About Us</a>
            </div>
        </div>
    );
};

export default Header;