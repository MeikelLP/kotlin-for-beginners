package de.neos.web.controllers;

import de.neos.web.entities.Entity;
import de.neos.web.entities.students.persistence.StudentRepository;
import de.neos.web.entities.students.persistence.entity.Student;
import de.neos.web.utility.ExtensionsKt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@RestController
public class StudentController {
    private final StudentRepository repository;

    public StudentController(StudentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/student/{name}")
    public List<Student> findAll(@PathVariable String name) {
        return repository.findByLastName(name);
    }

    @GetMapping("/student/randomized")
    public Entity randomized() {
        Stream stream = StreamSupport.stream(repository.findAll().spliterator(), false);

        // skipping isPresent check for simplicity
        @SuppressWarnings("OptionalGetWithoutIsPresent")
        Entity entity = ((Entity) stream.findFirst().get());
        return ExtensionsKt.randomize(entity);
    }

}
