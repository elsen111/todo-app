package com.todobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
public class TodoBackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(TodoBackendApplication.class, args);
  }
}
