import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';
import AdminLoginForm from './components/AdminLoginForm';

import FileUploadComponent from './components/FileUploadComponent';
import FileListComponent from './components/FileListComponent';
import FileListDisplayComponent from './components/FileListDisplayComponent';
import AboutComponent from './components/AboutComponent'; // Import the AboutComponent


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomeComponent />} />
        {/* Route for the admin login */}
        <Route path="/admin" element={<AdminLoginForm />} />

        {/* Route for the file upload component */}
        <Route path="/upload" element={<FileUploadComponent />} />
        {/* Route for the file list component */}
        <Route path="/api/uploaded-files" element={<FileListComponent />} />

        <Route path="/view-files" element={<FileListDisplayComponent />} />

         {/* Route for the About page */}
         <Route path="/about" element={<AboutComponent />} />

      </Routes>
    </Router>
  );
};

export default App;