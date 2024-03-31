package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories("com.example.demo") // Specify the package where your repositories are located
public class Trial1Application {

    public static void main(String[] args) {
        SpringApplication.run(Trial1Application.class, args);
    }

}
