import React, { useState, useEffect } from 'react';

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/hello') // Ensure correct backend URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => setMessage(data))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
            <p>Message from backend: {message}</p>
        </div>
    );
};

export default HelloWorld;
