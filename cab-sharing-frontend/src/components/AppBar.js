// src/components/AppBar.js
import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBar = () => (
    <MuiAppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Cab Sharing System
            </Typography>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/post-trip">Post Trip</Button>
            <Button color="inherit" component={Link} to="/search-trips">Search Trips</Button>
        </Toolbar>
    </MuiAppBar>
);

export default AppBar;
