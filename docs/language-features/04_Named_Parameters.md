# Named Parameters

_Please read [Optional Parameters](03_Optional_Parameters.md) first._

Named parameters are usually used in combination with optional parameters. Usually you have to stick to the parameter order when invoking a method. Like in C# Kotlin allows the usage of named parameters. Named parameters are useful when you don't want to pass every default value to a method with optional parameters, because may pass only the values you actually need to pass.

_Reusing the example from [Optional Parameters](03_Optional_Parameters.md)_

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