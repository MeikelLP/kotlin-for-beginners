package de.neos.web

import de.neos.web.entities.customer.persistence.CustomerRepository
import de.neos.web.entities.customer.persistence.entity.Customer
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class WebApplication {
    @Bean
    fun init(repository: CustomerRepository) = CommandLineRunner {
        repository.save(Customer("Jack", "Bauer"))
        repository.save(Customer("Chloe", "O'Brian"))
        repository.save(Customer("Kim", "Bauer"))
        repository.save(Customer("David", "Palmer"))
        repository.save(Customer("Michelle", "Dessler"))
    }
}

fun main(args: Array<String>) {
    runApplication<WebApplication>(*args)
}
