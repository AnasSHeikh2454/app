// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import Home from './components/Home';
import PostTrip from './components/PostTrip';
import SearchTrip from './components/SearchTrip';
import MyTabs from './components/MyTabs';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Cab Sharing System
                        </Typography>
                    </Toolbar>
                </AppBar>
                <MyTabs />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post-trip" element={<PostTrip />} />
                        <Route path="/search-trips" element={<SearchTrip />} />
                    </Routes>
                </Container>
            </Router>
        </AuthProvider>
    );
};

export default App;
