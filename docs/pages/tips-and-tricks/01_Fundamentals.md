---
categories: ["Tips and Tricks"]
---

# Fundamentals

## `generateSequence`

_based on [Growth of the Population](https://www.codewars.com/kata/growth-of-a-population/) (modified)_

Imagine having 4 argumenst:

* `population` current population of the city
* `targetPopulation` population to reach
* `relativeGrowth` growth in percentage each year depending on the cities size
* `absoluteGrowth` number of people growth joining the town each year independent of the cities size

you would usually write something like this:

```kotlin
// Kotlin

fun nbYearOld(pp0:Int, percent:Double, aug:Int, p:Int):Int {
  var years = 0
  var people = pp0.toDouble()
  while(people < p) {
    people *= (percent / 100 + 1)
    people += aug
    years++
  }
  return years
}
```

but there is an easier and shorter way:

```kotlin
// Kotlin

fun nbYear(pp0:Int, percent:Double, aug:Int, p:Int):Int {
    return generateSequence (pp0.toDouble()) {
      ((percent / 100 + 1) * it + aug).takeIf { it < p }
    }.count()
}
```

`generateSequence` optionally accepts an initial value `generateSequence (pp0.toDouble())`. Also you pass an lambda kotlin style `{ it }`.
As usual you don't need a `return` keyword because the last line in a lambda is automatically returned.
`generateSequence` builds new values as long as the value is not `null`. Here comes `takeIf{ it }` in handy because it only returns the value
if the condition matches else `null` is returned. Finally we call `.count()` to get the amount of years.

## `repeat`

_based on [Mumbling](https://www.codewars.com/kata/mumbling/kotlin)_

The method `accum` shall return the following results:

```kotlin
accum("abcd") // -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") // -> "C-Ww-Aaa-Tttt"
```

Using the `repeat` function on a string makes it easy to do this whithout any bloated while- / for-loops:

```kotlin
fun accum(s:String):String{
    return s.mapIndexed { index, char ->
        char.toUpperCase() + char.toString().toLowerCase().repeat(index)
    }.joinToString("-")
}
```

## Invoke Strings

You can invoke strings in Kotlin with simple extensions:

```kotlin
print("Test"("Testificate")) // prints: Testificate

operator fun<T> String.invoke(s: T) = s
```

## Evading Javas Type Erasure

Due Javas type erasure we have problems when it comes to type comparision. In Kotlin you can evade this problem with the `reified` keyword won't lose
the type. But `reified` can only be used in inline functions not on classes so we have to create an extension method:

```kotlin
class TrickyKotlin6<T>

inline fun <reified T>TrickyKotlin6<T>.classOrSuperClassOf(anyGetter : () -> Any) : Boolean{
    return anyGetter() is T
}

// we can now call
TrickyKotlin6<String>().classOrSuperClassOf { "" } // true
TrickyKotlin6<CharSequence>().classOrSuperClassOf { "" } // true
TrickyKotlin6<Comparable<String>>().classOrSuperClassOf { "" } // true
```