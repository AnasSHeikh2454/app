import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:8081/auth';
const TRIP_API_URL = 'http://localhost:8081/api/trips';

export const getToken = () => localStorage.getItem('authToken');

export const getUser = (token) => {
    if (!token) return null;
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken; // Assuming the user data is stored in the JWT payload
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        localStorage.setItem('authToken', response.data.token); // Save token to local storage
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Error signing up');
    }
};

export const login = async (loginData) => {
    console.log('Sending login data:', loginData); // Log the data being sent
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        localStorage.setItem('authToken', response.data.token); // Save token to local storage
        return response.data; // Expecting { token, user }
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error logging in');
    }
};

export const postTrip = async (tripData) => {
    console.log('Sending trip data:', tripData); // Log the data being sent
    try {
        const token = getToken();
        const response = await axios.post(`${TRIP_API_URL}/post`, tripData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Trip posted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting trip:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error posting trip');
    }
};

export const searchTrips = async (destination, start, end) => {
    console.log('Searching trips with criteria:', { destination, start, end }); // Log the search criteria
    try {
        const token = getToken();
        const response = await axios.get(`${TRIP_API_URL}/search`, {
            params: { destination, start, end },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Trips found:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error searching trips:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error searching trips');
    }
};

export const bookTrip = async (tripId, bookingData) => {
    console.log('Booking trip with data:', bookingData); // Log the booking data
    try {
        const token = getToken();
        const response = await axios.post(`${TRIP_API_URL}/book/${tripId}`, bookingData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Trip booked successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error booking trip:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error booking trip');
    }
};

export const getAllTrips = async () => {
    console.log('Fetching all trips');
    try {
        const token = getToken();
        const response = await axios.get(`${TRIP_API_URL}/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('All trips fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching all trips:', error.response?.data || error.message);
        throw new Error(error.response?.data || 'Error fetching all trips');
    }
};
