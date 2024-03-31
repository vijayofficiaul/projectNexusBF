import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Check if credentials match
        if (username === 'admin' && password === 'adminpassword') {
            // Redirect to the /files endpoint if credentials match
            navigate('/files');
        } else {
            // Display error message if credentials do not match
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default AdminLoginComponent;
