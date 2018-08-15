package de.neos.web.services

import de.neos.web.entities.data.persistence.entity.Data
import org.springframework.stereotype.Service

@Service
class DataService {
    fun getLastNames() : List<String> {
        val list = listOf(
                Data("Meikel", "Philipp"),
                Data("Peter", "Zwegat"),
                Data("Carsten", "Stahl"),
                Data("Anna", "Müller")
        )
        return list
                .filter { data -> data.firstName.contains('e') }
                .sortedBy { data -> data.firstName }
                .map { data -> data.lastName }
                .distinct()
                .toList()
    }
}