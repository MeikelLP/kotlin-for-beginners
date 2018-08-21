---
categories: ["Language Features"]
---

# Strings

## String Literals

Like in Java you can simply write strings with \n.

```kotlin
// Kotlin
val s = "Hello World!\n"
```

But when it comes to more complex sentences \n might get confusing or uglifies the actual string.
For this you can use raw strings without escaping:

```kotlin
// Kotlin
val text = """
    for (c in "foo")
        print(c)
"""
```

If you don't like leading whitespaces you can simply remove it with `.trimMargin()`. It's even more [powerful](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/trim-margin.html).

## String Templates

If you know [Javascripts ES2015 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) you already know how it goes. Else it's just as easy:

```kotlin
// Kotlin
val i = 10
println("i = $i") // prints "i = 10"

val s = "abc"
println("$s.length is ${s.length}") // prints "abc.length is 3"

val price = """
${'$'}9.99
"""
```

And you can still combine it with `String.format` if you want.
