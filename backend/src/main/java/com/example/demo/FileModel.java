package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "files")
public class FileModel {

    @Id
    private String id;
    private String fileName;
    private String fileType;
    private byte[] data;
    private String projectName;
    private String description;
    private String requirements;
    private String uploaderId; // New field to store the uploader's ID

    public FileModel() {
    }

    // Constructor without uploaderId parameter
    public FileModel(String id, String fileName, String fileType, byte[] data, String projectName, String description, String requirements) {
        this.id = id;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.projectName = projectName;
        this.description = description;
        this.requirements = requirements;
    }

    // Constructor with uploaderId parameter
    public FileModel(String id, String fileName, String fileType, byte[] data, String projectName, String description, String requirements, String uploaderId) {
        this.id = id;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.projectName = projectName;
        this.description = description;
        this.requirements = requirements;
        this.uploaderId = uploaderId;
    }

    // Getters and setters for uploaderId
    public String getUploaderId() {
        return uploaderId;
    }

    public void setUploaderId(String uploaderId) {
        this.uploaderId = uploaderId;
    }

    // Getters and setters for other fields
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }
}
