# Functions

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

In this example in fact Java is shorter. When you have longer methods with more complex method headers this can fastly shift to Kotlins extendablity (see [Expression Bodies](#expression-bodies), [Optional Parameters](03_Optional_Parameters.md) and [Named Parameters](04_Named_Parameters.md)).

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

## Names

It's not recommended but you can also use special names for your functions like `get name of x`.

```kotlin
fun `get name of x`() = x.name
```

This may be useful for easier to read test names.