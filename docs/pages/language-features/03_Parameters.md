---
layout: post
---
# Parameters

## Optional Parameters

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

## Named Parameters

_Please read [Optional Parameters](03_Parameterss.md#optional-parameters) first._

Named parameters are usually used in combination with optional parameters. Usually you have to stick to the parameter order when invoking a method. Like in C# Kotlin allows the usage of named parameters. Named parameters are useful when you don't want to pass every default value to a method with optional parameters, because may pass only the values you actually need to pass.

_Reusing the example from [Optional Parameters](03_Parameters.md#optional-parameters)_

``` java
// java

createName("", "MyLastName")
```

```kotlin
// kotlin

createName(lastName = "MyLastName")
```

> But here kotlin is even longer than Java!

Yes it is. In small scenarios this mostly is not needed. Imagine having a method called `configure` which accepts about ~ 10 parameters with _x_ overloads. In Java you would have to find the matching overload to fit your needs. Kotlin librarys or simple Kotlin methods can be called with named parameters (still only usefull with optional parameters). In Kotlin you would only have to use this one method and pass only what you want to pass.