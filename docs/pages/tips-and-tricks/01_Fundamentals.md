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
