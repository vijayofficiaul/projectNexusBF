package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.UUID;
import java.util.List;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    public String storeFile(MultipartFile file, String projectName, String description, String requirements) throws IOException {
        String fileId = UUID.randomUUID().toString();
        FileModel fileModel = new FileModel(fileId, file.getOriginalFilename(), file.getContentType(), file.getBytes(), projectName, description, requirements);
        fileRepository.save(fileModel);	
        return fileId;
    }

    public FileModel getFile(String fileId) {
        return fileRepository.findById(fileId).orElse(null);
    }
    
    public List<FileModel> getAllFiles() {
        return fileRepository.findAll();
    }
    
    public void deleteFile(String fileId) {
        fileRepository.deleteById(fileId);
    }

}
