import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, Card, CardContent, Grid } from '@mui/material';
import { searchTrips } from '../services/api';

const SearchTrips = () => {
    const [searchParams, setSearchParams] = useState({
        destination: '',
        start: '',
        end: ''
    });

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        searchTrips(searchParams.destination, searchParams.start, searchParams.end)
            .then(response => {
                setTrips(response);
                setLoading(false);
            })
            .catch(error => {
                setError('Error searching trips: ' + error.message);
                setLoading(false);
            });
    };

    const handleBookNow = (trip) => {
        navigate(`/book-trip/${trip.id}`, { state: { trip } });
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography component="h1" variant="h5">
                    Search Trips
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="destination"
                        label="Destination"
                        name="destination"
                        value={searchParams.destination}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="datetime-local"
                        id="start"
                        label="Start Time"
                        name="start"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={searchParams.start}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="datetime-local"
                        id="end"
                        label="End Time"
                        name="end"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={searchParams.end}
                        onChange={handleChange}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                        Search
                    </Button>
                    {loading && <Typography>Loading...</Typography>}
                    {error && <Typography color="error">{error}</Typography>}
                </Box>
                <Box sx={{ mt: 4, width: '100%' }}>
                    <Typography component="h2" variant="h6">
                        Available Trips
                    </Typography>
                    <Grid container spacing={2}>
                        {trips.length > 0 ? (
                            trips.map(trip => (
                                <Grid item xs={12} sm={6} md={4} key={trip.id}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {trip.destination || 'Unknown Destination'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Departure Time: {trip.departureTime ? new Date(trip.departureTime).toLocaleString() : 'N/A'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Estimated Arrival Time: {trip.estimatedArrivalTime ? new Date(trip.estimatedArrivalTime).toLocaleString() : 'N/A'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Price: {trip.price || 'N/A'}/-
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Host: {trip.hostName || 'N/A'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Host Phone: {trip.hostPhone || 'N/A'}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Seats Available: {trip.seatsAvailable || 'N/A'}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleBookNow(trip)}
                                                sx={{ mt: 2 }}
                                            >
                                                Book Now
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            !loading && <Typography>No trips found.</Typography>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default SearchTrips;
