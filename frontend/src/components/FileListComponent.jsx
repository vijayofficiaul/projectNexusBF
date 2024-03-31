import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FileListComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchFiles = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/uploaded-files', {
                auth: { username, password } // Send credentials with the request
            });
            setFiles(response.data);
        } catch (error) {
            setError('Invalid username or password. Please try again.');
            console.error('Error fetching files:', error);
        }
    };

    const handleDownload = async (fileId, fileName) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/download/${fileId}`, {
                responseType: 'blob',
                auth: { username, password } // Send credentials with the request
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
            alert('Failed to download file. Please try again.');
        }
    };

    const handleDelete = async (fileId) => {
        try {
            await axios.delete(`http://localhost:8080/api/delete-file/${fileId}`, {
                auth: { username, password } // Send credentials with the request
            });
            setFiles(files.filter(file => file.id !== fileId)); // Remove the deleted file from the state
            alert('File deleted successfully');
        } catch (error) {
            console.error('Error deleting file:', error);
            alert('Failed to delete file. Please try again.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetchFiles();
    };

    return (
        <div>
            <h2>Uploaded Files</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Fetch Files</button>
            </form>
            {error && <div>{error}</div>}
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <div>
                            <strong>File Name:</strong> {file.fileName}
                        </div>
                        <div>
                            <strong>Project Name:</strong> {file.projectName}
                        </div>
                        <div>
                            <strong>Description:</strong> {file.description}
                        </div>
                        <div>
                            <strong>Requirements:</strong> {file.requirements}
                        </div>
                        <button onClick={() => handleDownload(file.id, file.fileName)}>Download</button>
                        <button onClick={() => handleDelete(file.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileListComponent;
