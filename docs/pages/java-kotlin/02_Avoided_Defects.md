---
categories: ["Java & Kotlin"]
---

# Avoided Defects

_this page is powered by the article of [Dan Rusu](https://proandroiddev.com/kotlin-avoids-entire-categories-of-java-defects-89f160ba4671)_

## Equality

_see [Equality](../langauge-features/08_Equality.md) before reading_

```java
// Java

int employeeAge = employee.getAge();
int supervisorAge = supervisor.getAge();
if (employeeAge == supervisorAge) // works

Integer employeeAge = employee.getAge();
Integer supervisorAge = supervisor.getAge();
if (employeeAge == supervisorAge) // wont work anymore
```

```kotlin
// Kotlin
val employeeAge : Int = employee.age
val supervisorAge : Int = supervisor.age
if (employeeAge == supervisorAge) // works

val employeeAge : Int? = employee.age
val supervisorAge : Int? = supervisor.age
if (employeeAge == supervisorAge) // still works
```