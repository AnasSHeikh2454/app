import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavigationTabs = () => {
    const location = useLocation();

    return (
        <Tabs value={location.pathname} aria-label="navigation tabs">
            <Tab label="Home" value="/" component={Link} to="/" />
            <Tab label="Sign Up" value="/signup" component={Link} to="/signup" />
            <Tab label="Login" value="/login" component={Link} to="/login" />
            <Tab label="Post Trip" value="/post-trip" component={Link} to="/post-trip" />
            <Tab label="Search Trips" value="/search-trips" component={Link} to="/search-trips" />
        </Tabs>
    );
};

export default NavigationTabs;
