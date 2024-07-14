import React, { useState } from 'react';
import { bookTrip } from '../services/api';

const BookingConfirmation = ({ trip }) => {
    const [pickupPoint, setPickupPoint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        bookTrip({ tripId: trip.id, pickupPoint })
            .then(response => {
                alert('Booking confirmed');
            })
            .catch(error => {
                alert('Error confirming booking');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Confirmation</h2>
            <label>
                Pickup Point:
                <input type="text" name="pickupPoint" value={pickupPoint} onChange={(e) => setPickupPoint(e.target.value)} required />
            </label>
            <button type="submit">Confirm Booking</button>
        </form>
    );
};

export default BookingConfirmation;
