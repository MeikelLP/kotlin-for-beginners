package de.neos.web.controllers;

import de.neos.web.entities.students.persistence.StudentRepository;
import de.neos.web.entities.students.persistence.entity.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {
    private final StudentRepository repository;

    public StudentController(StudentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/student/{name}")
    public List<Student> findAll(@PathVariable String name){
        return repository.findByLastName(name);
    }
}
