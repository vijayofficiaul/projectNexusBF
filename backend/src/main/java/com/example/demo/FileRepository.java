package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileRepository extends MongoRepository<FileModel, String> {
    // Additional custom methods can be defined here if needed
}
