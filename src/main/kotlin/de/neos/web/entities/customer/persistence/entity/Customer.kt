package de.neos.web.entities.customer.persistence.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Customer(
        override var firstName: String = "",
        override var lastName: String = "",

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0
) : de.neos.web.entities.Entity
