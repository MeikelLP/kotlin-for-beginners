---
categories: ["Language Features"]
---

# Overloading / Overriding

## Function Overriding

You can override a function / method just like you could in Java (`@Override`).
Kotlin brings a limitations to it. The function to override must be `open`. The override function must not have default arguments.

```kotlin
// Kotlin

class SuperClass {
    open fun addNumber(i : Int) {
        sum += i
    }
}

class SubClass : SuperClass {
    override fun addNumber(i : Int) {
        sum += i + 10
    }
}
```

## Operator Overloading

In Kotlin you can also overwrite operators which makes programming with complex types much easier.
Unity3D (c#) does this since its beginning with Vector objects which improves readability and maintainability of the code.

```kotlin
// Kotlin
data class Vec(val x: Float, val y: Float) {
    operator fun plus(v: Vec) = Vec(x + v.x, y + v.y)
}

val v = Vec(2f, 3f) + Vec(4f, 1f)
```