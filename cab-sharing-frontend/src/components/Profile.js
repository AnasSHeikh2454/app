// src/components/Profile.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, Typography, Box } from '@mui/material';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                <Typography variant="body1">Name: {user?.name || 'N/A'}</Typography>
                <Typography variant="body1">Phone: {user?.phone || 'N/A'}</Typography>
                <Typography variant="body1">Role: {user?.role || 'N/A'}</Typography>
            </Box>
        </Container>
    );
};

export default Profile;
