import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Tabs, Tab } from '@mui/material';
import { AuthContext } from './context/AuthContext';
import Home from './components/Home';
import SignUp from './components/SignUp';
import PostTrip from './components/PostTrip';
import SearchTrips from './components/SearchTrips';
import Login from './components/Login';
import Profile from './components/Profile';
import BookTrip from './components/BookTrip';

const App = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cab Sharing System
                    </Typography>
                    <Tabs value={location.pathname} aria-label="navigation tabs">
                        <Tab label="Home" value="/" component={Link} to="/" />
                        {!user && <Tab label="Sign Up" value="/signup" component={Link} to="/signup" />}
                        {!user && <Tab label="Login" value="/login" component={Link} to="/login" />}
                        {user && (
                            <>
                                <Tab label="Post Trip" value="/post-trip" component={Link} to="/post-trip" />
                                <Tab label="Search Trips" value="/search-trips" component={Link} to="/search-trips" />
                                <Tab label="Profile" value="/profile" component={Link} to="/profile" />
                                <Tab label="Logout" onClick={logout} />
                            </>
                        )}
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Container>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/post-trip" element={<PostTrip />} />
                    <Route path="/search-trips" element={<SearchTrips />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/book-trip/:tripId" element={<BookTrip />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Typography>Page Not Found</Typography>} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
