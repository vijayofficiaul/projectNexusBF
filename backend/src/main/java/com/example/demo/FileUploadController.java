package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file,
                                             @RequestParam("projectName") String projectName,
                                             @RequestParam("description") String description,
                                             @RequestParam("requirements") String requirements) {
        try {
            String fileId = fileService.storeFile(file, projectName, description, requirements);
            return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully! File ID: " + fileId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file: " + e.getMessage());
        }
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String fileId) {
        try {
            FileModel file = fileService.getFile(fileId);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType(file.getFileType()));
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(file.getFileName()).build());
            return ResponseEntity.ok().headers(headers).body(file.getData());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    @GetMapping("/uploaded-files") // Changed endpoint path to avoid conflict
    public ResponseEntity<List<FileModel>> getAllFiles() {
        List<FileModel> files = fileService.getAllFiles();
        return ResponseEntity.status(HttpStatus.OK).body(files);
    }
    
    @DeleteMapping("/delete-file/{fileId}")
    public ResponseEntity<String> deleteFileById(@PathVariable String fileId) {
        try {
            fileService.deleteFile(fileId);
            return ResponseEntity.ok("File deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete file: " + e.getMessage());
        }
    }
}