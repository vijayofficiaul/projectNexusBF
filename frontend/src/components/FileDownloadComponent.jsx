// FileDownloadComponent.jsx

import React from 'react';
import axios from 'axios';

const FileDownloadComponent = ({ fileId }) => {
    const handleDownload = () => {
        axios.get(`http://localhost:8080/api/download/${fileId}`, { responseType: 'blob' })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.txt');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Error downloading file:', error);
                alert('Failed to download file. Please try again.');
            });
    };

    return (
        <div>
            <h2>Download File</h2>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default FileDownloadComponent;
