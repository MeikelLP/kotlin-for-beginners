package de.neos.web.entities.customer.persistence

import de.neos.web.entities.customer.persistence.entity.Customer
import org.springframework.data.repository.CrudRepository

interface CustomerRepository : CrudRepository<Customer, Long> {
    fun findByLastName(name: String): List<Customer>
}