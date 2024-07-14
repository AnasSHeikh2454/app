import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { postTrip } from '../services/api';

const PostTrip = () => {
    const [tripData, setTripData] = useState({
        destination: '',
        departureTime: '',
        estimatedArrivalTime: '',
        price: 0,
        hostName: '',
        hostPhone: '',
        seatsAvailable: 0
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setTripData({ ...tripData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            console.log('Posting trip:', tripData);
            const response = await postTrip(tripData);
            setSuccess('Trip posted successfully!');
            console.log('Response:', response);
        } catch (error) {
            setError('Error posting trip: ' + error.message);
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography component="h1" variant="h5">
                    Post a Trip
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="destination"
                        label="Destination"
                        name="destination"
                        value={tripData.destination}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="datetime-local"
                        id="departureTime"
                        label="Departure Time"
                        name="departureTime"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={tripData.departureTime}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="datetime-local"
                        id="estimatedArrivalTime"
                        label="Estimated Arrival Time"
                        name="estimatedArrivalTime"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={tripData.estimatedArrivalTime}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        id="price"
                        label="Price"
                        name="price"
                        value={tripData.price}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="hostName"
                        label="Host Name"
                        name="hostName"
                        value={tripData.hostName}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="hostPhone"
                        label="Host Phone"
                        name="hostPhone"
                        value={tripData.hostPhone}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        id="seatsAvailable"
                        label="Seats Available"
                        name="seatsAvailable"
                        value={tripData.seatsAvailable}
                        onChange={handleChange}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                        Post Trip
                    </Button>
                    {loading && <Typography>Loading...</Typography>}
                    {error && <Typography color="error">{error}</Typography>}
                    {success && <Typography color="primary">{success}</Typography>}
                </Box>
            </Box>
        </Container>
    );
};

export default PostTrip;
