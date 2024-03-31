package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FileAccessController {

    @Autowired
    private FileAccessService fileAccessService;

    @Autowired
    private UserService userService; // Assuming you have a UserService for user authentication

    @GetMapping("/files")
    public ResponseEntity<List<FileModel>> getFiles(@RequestParam("username") String username,
                                                    @RequestParam("password") String password) {
        // Validate credentials
        if (userService.isValidCredentials(username, password)) {
            // If credentials are valid, retrieve files for the user
            List<FileModel> files = fileAccessService.getFilesByUsername(username);
            return ResponseEntity.ok(files);
        } else {
            // If credentials are invalid, return UNAUTHORIZED status
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
