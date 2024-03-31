import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const AdminLoginForm = ({ onLogin }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Validate admin credentials
        if (username === 'admin' && password === 'adminpassword') {
            // Redirect to the FileListComponent upon successful login
            navigate('/files');
            onLogin(true); // Grant access
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default AdminLoginForm;