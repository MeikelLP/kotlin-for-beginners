package de.neos.web.entities.students.persistence;

import de.neos.web.entities.students.persistence.entity.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Long> {
    List<Student> findByLastName(String name);
}
