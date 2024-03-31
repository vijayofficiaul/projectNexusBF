import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const SuperEndpointComponent = () => {
    return (
        <div>
            <h2>This is the Super </h2>
            {/* Add content for the Super endpoint */}
            {/* Add Link to the Admin endpoint */}
            <Link to="/admin">
                <button>Admin</button>
            </Link>
        </div>
    );
};

export default SuperEndpointComponent;
