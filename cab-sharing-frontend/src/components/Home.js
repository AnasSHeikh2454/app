// src/components/Home.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Typography, Container, Box } from '@mui/material';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Welcome to Cab Sharing System
                </Typography>
                {user && (
                    <Typography variant="body1" component="div">
                        Logged in as: {user.name}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Home;
