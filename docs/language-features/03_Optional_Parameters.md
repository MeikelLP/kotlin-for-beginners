# Optional Parameters

Like in C# Kotlin allows methods to have optional parameters. Optional parameters are not required to have a value because they have a _default_ value.

``` kotlin
// kotlin

fun createX(name: String, size: Int = 10){
    return name + size;
}

// ...

fun main(){
    createX("Peter")        // returns Peter10
    createX("Peter", 20)    // returns Peter20
}
```

> "But can't you do that with overloads as well?"

No you can't. Overloads may seem like they are equal to use but when having more complex methods with multiple parameters it will get difficult with overloads. Also overloads bloat up your code. See the following example.

```java
// java

public String createName(String firstName, String lastName) {
    return firstName + lastName;
}

public String createName(String firstName) {
    return createName(firstName, "");
}

public String createName(String lastName) {
    // not even possible - compiler won't allow duplicate method signature
}
```

```kotlin
// kotlin

fun createName(firstName: String = "", lastName: String = ""){
    return firstName + lastName
}

```

> ⚠️ The Kotlin way is more secure that writing _x_ overloads because if not teseted/covered correctly these methods may behave differently that their overloads.
