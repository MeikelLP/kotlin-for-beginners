package de.neos.web.utility

import de.neos.web.entities.Entity
import java.util.*

fun Entity.randomize() : Entity {
    this.firstName = UUID.randomUUID().toString()
    this.lastName = UUID.randomUUID().toString()

    return this
}