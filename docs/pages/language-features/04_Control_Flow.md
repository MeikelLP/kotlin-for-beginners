---
layout: doc
categories: ["Language Features"]
---
# Control Flow

## If Expressions

In Java you can use conditional to easily assign value A or B to an object.

```java
int x = isEven() ? 4 : 3; // java
```

```kotlin
var x = if (isEven()) 4 else 3 // kotlin
```

> But java is much simpler in this approach isn't it?

Yes at this point that is true. But the if expression is much more powerful than a simple condition. For example can use `else if` or if you have a more complex logic u can use blocks to make the code more readable.

```kotlin
var x = if (isEven()) {
    print("chose even")
    4
} else if (isOdd()) {
    print("chose odd")
    3
} else {
    print("chose the answer")
    42
}
```

## When Expressions

Kotlins `when` is similar to Javas `switch` (`switch` does not exist in Kotlin) but much more powerful.

```java
// java

switch (x) {
    case 1:
        System.out.print("x == 1");
        break;
    case 2:
        System.out.print("x == 2");
        break;
    default:
        System.out.print("x is neither 1 nor 2")
}
```

```kotlin
// kotlin

when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> { // Note the block
        print("x is neither 1 nor 2")
    }
}
```

> ⚠ `when` matches all arguments until one is satisfied. Every argument after the match will be ignored.

`when` is even more powerful in its conditions:

```kotlin
when (x) {
    1, 2 -> print("x == 1 or x == 2")
    in 3..10 -> print("x is somewhere between 3 and 10")
    in !11..15 -> print("x is not valid")
    in validNumbers -> print("x is valid")
    else -> print("none of the above")
}
```

Also type checks are easily possible:

```kotlin
when (x) {
    is String -> saveValue(parseInt(x))
    is Int -> saveValue(x)
    else -> throw Exception("Uncool")
}
```

Like in if expressions you can also use `when`'s return values.

```kotlin
var str = when {
    x is String -> x
    x is Float -> ((Int)x).toString()
    else -> x.toString()
}
```

`when` can also replace a `if-else-if` chain.

```kotlin
when {
    x.isOdd() -> print("x is odd")
    x.isEven() -> print("x is even")
    else -> print("x is funny")
}
```

## Loops

### `for` loops

Like in C# you can use a simple human readable for-each loop.

```kotlin
for(item in collection) {
    print(item)
}
```

Note that the `{}` are not required here like in simple `if` statements. You can even use more complex expressions for the `for` loop.

```kotlin
for(i in 1..10)
for(i in 10 downTo 0 step 2)
```

> Ranges are compiled to index based loops.

Furthermore you can iterate over index and value at the same time (`for` + `foreach` combinded).

```kotlin
for ((index, value) in array.withIndex()) {
    println("the element at $index is $value")
}
```

### `while` loops

While loops work as usual.

### `continue` and `break` in loops

see [official docs](https://kotlinlang.org/docs/reference/returns.html#break-and-continue-labels)

## See more

* [Official Control Flow Guide](https://kotlinlang.org/docs/reference/control-flow.html)
* [Control Structures Grammar](https://kotlinlang.org/docs/reference/grammar.html#control-structures)