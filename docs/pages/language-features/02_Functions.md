---
categories: ["Language Features"]
---
# Functions

_Function overload has there own [secton](09_Overloading.md#function-overloading)_

## General

The following functions are equal in both languages.

``` kotlin
// kotlin

fun sum(a: Int, b: Int): Int {
    return a + b
}
```

``` java
// java

public int sum(int a, int b) {
    return a + b;
}
```

> But isn't Java shorter and more readable?

In this example in fact Java is shorter. When you have longer methods with more complex method headers this can fastly shift to Kotlins extendablity (see [Expression Bodies](#expression-bodies), [Optional Parameters](#optional-parameters) and [Named Parameters](#named-parameters)).

Kotlin uses **aggresive type inference**. This means that Kotlin knows what your function is returning without needing to declare it explicitly (in most cases).

## Names

It's not recommended but you can also use special names for your functions like `get name of x`.

```kotlin
fun `get name of x`() = x.name
```

## Expression Bodies

_Reusing the example from [Functions](#functions)_

If you have some super short one-liner methods you usually have to write about 3-4 lines of Code. Aside you can also use properties for this use case.

```java
// java

@NotNull
public getDisplayName () {
    return fistName + lastName;
}
```

```kotlin
// kotlin

fun getDisplayName() = firstName + LastName
```

This may be useful for easier to read test names.

## Lambdas

In Kotlin lambdas is even better than Java 8s lambdas are. This overall improves readability and is much easier to write.

```kotlin
val sum = { x: Int, y: Int -> x + y }   // return type is automatically Int
val res = sum(4,7)                      // 11
```

* If a lambda is the only or last argument of a method the parentheses can be omitted.
* If you only have one lambda argument and don't want to declare a useless variable just use `it` -> `numbers.filter { it.isPrime() }`

Also Kotlin can be compiled to JRE6 bytecode so no need to miss lambdas when writing old apps.

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

_Please read [Optional Parameters](#optional-parameters) first._

Named parameters are usually used in combination with optional parameters. Usually you have to stick to the parameter order when invoking a method. Like in C# Kotlin allows the usage of named parameters. Named parameters are useful when you don't want to pass every default value to a method with optional parameters, because may pass only the values you actually need to pass.

_Reusing the example from [Optional Parameters](#optional-parameters)_

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