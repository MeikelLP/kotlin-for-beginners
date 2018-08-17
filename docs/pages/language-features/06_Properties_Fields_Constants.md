---
layout: "doc"
categories: ["Language Features"]
---

# Properties / Fields / Constants

## Properties

In Kotlin you don't have to write getter & setter like you have to in Java to define properties. It's much more simple:

```java
// java

private String name;

public String getName(){
    return name;
}

public void setName(String name){
    return this.name = name;
}
```

```kotlin
// kotlin
var name : String
```

Still you can control your getter & setter like you could in Java:

```kotlin
// kotlin

var name: String
    get() = name
    set(value) {
        name = value
    }
```

You can even choose seperate **visibility modifiers**:

```kotlin
// kotlin

var name : String
    private set
    // still public get

var name : String
    @Inject set // annotations are also possible
```

But still you can go with **backing fields** for special implementations.

```kotlin
// kotlin

private var _table: Map<String, Int>? = null
public val table: Map<String, Int>
    get() {
        if (_table == null) {
            _table = HashMap() // Type parameters are inferred
        }
        return _table ?: throw AssertionError("Set to null by another thread")
    }
```

## Fields

In Kotlin every member which is not declared private is a public property. If you want to have private fields you have to declare a member private:

```kotlin
// kotlin

private var _name: String
```

## Constants

In Kotlin you have the ability to create compile-time constants which can be used even in annotations. Under the hood the compiler replaces every reference with a string in the source code (references on constants disappear after the compile time).

```kotlin
const val SUBSYSTEM_DEPRECATED: String = "This subsystem is deprecated"

@Deprecated(SUBSYSTEM_DEPRECATED) fun foo() { ... }
```

## Late-Initialized Properties

When you declare a property in a Kotlin class you either have to declare a property in the [primary constructor](05_Classes.md#primary-constructor) or in the class body with a default value (because no non-initialized values are allowed by default). Sometimes this is not very helpful because you have to inject a component to a later time. To do this you can use the `lateinit` keyword. The compiler then knows properties with the `lateinit` get initilized at a later moment.

```kotlin
// kotlin

public class MyTest {
    lateinit var subject: TestSubject

    @SetUp fun setup() {
        subject = TestSubject()
    }

    @Test fun test() {
        subject.method()
    }
}
```

You can also check if the property has been set yet:

```kotlin
if (foo::subject.isInitialized) {
    println(foo.subject)
}
```

## See also

* [Official docs](https://kotlinlang.org/docs/reference/properties.html)