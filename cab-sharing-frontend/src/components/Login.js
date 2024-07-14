import React, { useState, useContext } from 'react';
import { login } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login: loginContext } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await login(formData);
            alert('Login successful');
            loginContext(response.token, response.user); // Pass the user data to the context
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Login;
