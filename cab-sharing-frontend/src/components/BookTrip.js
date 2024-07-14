import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { bookTrip } from '../services/api';

const BookTrip = () => {
    const { tripId } = useParams();
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState({
        pickupPoint: '',
        numberOfSeats: 1
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            console.log('Booking trip:', bookingData);
            const response = await bookTrip(tripId, bookingData);
            setSuccess('Trip booked successfully!');
            console.log('Response:', response);
            navigate('/profile'); // Redirect to profile after successful booking
        } catch (error) {
            setError('Error booking trip: ' + error.message);
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography component="h1" variant="h5">
                    Book a Trip
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="pickupPoint"
                        label="Pickup Point"
                        name="pickupPoint"
                        value={bookingData.pickupPoint}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        id="numberOfSeats"
                        label="Number of Seats"
                        name="numberOfSeats"
                        value={bookingData.numberOfSeats}
                        onChange={handleChange}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                        Book Trip
                    </Button>
                    {loading && <Typography>Loading...</Typography>}
                    {error && <Typography color="error">{error}</Typography>}
                    {success && <Typography color="primary">{success}</Typography>}
                </Box>
            </Box>
        </Container>
    );
};

export default BookTrip;
