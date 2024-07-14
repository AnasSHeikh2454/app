import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/post-trip">Post a Trip</Link></li>
                <li><Link to="/search-trips">Search Trips</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
