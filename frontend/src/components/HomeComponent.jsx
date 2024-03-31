import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLoginForm from './AdminLoginForm';
import FileListComponent from './FileListComponent';
import FileListDisplayComponent from './FileListDisplayComponent';

const HomeComponent = () => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);
    const [showFiles, setShowFiles] = useState(false);

    const handleAdminButtonClick = () => {
        setShowAdminLoginForm(true);
    };

    const handleLogin = (isLoggedIn) => {
        setIsAdminLoggedIn(isLoggedIn);
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <div>
                <Link to="/upload">
                    <button>Upload Files</button>
                </Link>
            </div>
            <div>
            <Link to="/api/uploaded-files"> {/* Link to view files */}

                <button onClick={handleAdminButtonClick}>Admin Login</button>
                </Link>

            </div>
            {showAdminLoginForm && (
                <AdminLoginForm onLogin={handleLogin} onClose={() => setShowAdminLoginForm(false)} />
            )}
            {isAdminLoggedIn && <FileListComponent />}
            <div>
                <Link to="/view-files"> {/* Link to view files */}
                    <button onClick={() => setShowFiles(true)}>View Files</button>
                </Link>

            </div>

            <div>
                <Link to="/about"> {/* Link to the About page */}
                 <button>About</button>
                </Link>
            </div>

            

            {showFiles && <FileListDisplayComponent />}
        </div>
    );
};

export default HomeComponent;