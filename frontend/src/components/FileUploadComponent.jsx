import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
    const [file, setFile] = useState(null);
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('projectName', projectName);
        formData.append('description', description);
        formData.append('requirements', requirements);

        axios.post('http://localhost:8080/api/upload', formData)
            .then(response => {
                console.log(response.data);
                alert('File uploaded successfully!');
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                alert('Failed to upload file. Please try again.');
            });
    };

    return (
        <div>
            <h2>Upload File</h2>
            <input type="file" onChange={handleFileChange} />
            <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploadComponent;
