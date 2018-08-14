package de.neos.web

import de.neos.web.entities.customer.persistence.CustomerRepository
import de.neos.web.entities.customer.persistence.entity.Customer
import de.neos.web.entities.students.persistence.StudentRepository
import de.neos.web.entities.students.persistence.entity.Student
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class WebApplication {
    @Bean
    fun init(customerRepository: CustomerRepository, studentRepository: StudentRepository) = CommandLineRunner {
        customerRepository.save(Customer("Jack", "Bauer"))
        customerRepository.save(Customer())

        studentRepository.save(Student("David", "Palmer"))
        studentRepository.save(Student("Michelle", "Dessler"))
    }
}

fun main(args: Array<String>) {
    runApplication<WebApplication>(*args)
}
