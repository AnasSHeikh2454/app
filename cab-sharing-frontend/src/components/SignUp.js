import React, { useState, useContext } from 'react';
import { signUp } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
    const [formData, setFormData] = useState({
        dp: '',
        name: '',
        role: 'Student',
        phone: '',
        password: '',
    });

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(formData);
            login(response); // Login the user after successful signup
            alert('Sign up successful');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                Display Picture URL:
                <input type="text" name="dp" value={formData.dp} onChange={handleChange} required />
            </label>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Role:
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="Student">Student</option>
                    <option value="Staff">Staff</option>
                    <option value="Cab-Driver">Cab-Driver</option>
                </select>
            </label>
            <label>
                Phone Number:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
