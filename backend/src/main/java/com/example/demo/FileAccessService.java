package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileAccessService {

    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private UserRepository userRepository;

    public List<FileModel> getFilesByUsername(String username) {
        // Retrieve the user based on the username
        User user = userRepository.findByUsername(username);
        if (user != null) {
            // Retrieve all files and filter by the uploader's ID
            List<FileModel> allFiles = fileRepository.findAll();
            return allFiles.stream()
                           .filter(file -> file.getUploaderId().equals(user.getId())) // Filter files by uploader's ID
                           .collect(Collectors.toList());
        } else {
            // User not found, return an empty list
            return List.of();
        }
    }
}
