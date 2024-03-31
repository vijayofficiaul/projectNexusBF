import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileListDisplayComponent = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = () => {
        axios.get('http://localhost:8080/api/uploaded-files')
            .then(response => {
                setFiles(response.data);
            })
            .catch(error => {
                console.error('Error fetching files:', error);
                alert('Failed to fetch files. Please try again.');
            });
    };

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        {/* <div>
                            <strong>File Name:</strong> {file.fileName}
                        </div> */}
                        <div>
                            <strong>Project Name:</strong> {file.projectName}
                        </div>
                        <div>
                            <strong>Description:</strong> {file.description}
                        </div>
                        <div>
                            <strong>Requirements:</strong> {file.requirements}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileListDisplayComponent;
