import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookedUsers } from '../services/api';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const BookedUsers = () => {
    const { tripId } = useParams();
    const [bookedUsers, setBookedUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookedUsers = async () => {
            try {
                const users = await getBookedUsers(tripId);
                setBookedUsers(users);
            } catch (error) {
                setError('Error fetching booked users: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookedUsers();
    }, [tripId]);

    return (
        <Container maxWidth="md">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography component="h1" variant="h5">
                    Booked Users
                </Typography>
                {loading ? (
                    <Typography>Loading...</Typography>
                ) : error ? (
                    <Typography color="error">{error}</Typography>
                ) : (
                    <List>
                        {bookedUsers.map((user, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`Seat: ${user.seat}`} />
                                {/* Add more user details here if available */}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>
        </Container>
    );
};

export default BookedUsers;
