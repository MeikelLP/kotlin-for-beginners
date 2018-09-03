---
categories: ["Language Features"]
---
# Classes

## Constructors

In Kotlin you have **one** primary constructor and **one or more** secondary constructors. Primary constructors are only used to pass required fields to the class. Primary constructors cannot contain any code. To run code after the primary constructor use `init`-blocks.

### Primary Constructor

```java
// java
public class User{

    public User(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
```

```kotlin
// kotlin

class User(var firstName: String, var lastName: String)
```

This is especially useful when creating [data classes](#data-classes). As you can see you don't need curly brackets `{}` for the body if you only define class properties. If you still want some code in your primary

### Secondary Constructor

Secondary constructors can be created via the `constructor` keyword.

```kotlin
// kotlin

class User(
    var firstName: String,
    var lastName: String
){
    // using one parameter for both
    constructor(name: String){
        firstName = name
        lastName = name
    }
}
```

### Default Values / Default Constructor

When you work with frameworks like **Spring** you may come across some errors where Spring cannot instantiate a class because it is missing a default constructor. You can either do this by creating a secondary constructor without parameters or by assigning default values to you properties.

```kotlin
// kotlin

class User(
    var firstName: String = "",
    var lastName: String = ""
)
```

> But in Kotlin aren't strings not-null anyway? Why do I have to set a string to its default value altought it already is this value?

That's correct. Kotlin does not allow null values for `String` (unlike `String?`). Kotlin needs these default values to determine whether the properties shall be an optional parameter or not (see [Optional Parameters](02_Functions.md#optional-parameters)).

## Data Classes

In Kotlin data classes can be simplified and need no additional overhead when declaring.

```java
// java

public final class User {

    private long id;

    @NotNull
    private String username;

    @NotNull
    private String password;

    public User(long id, @NotNull String username, @NotNull String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    @NotNull
    public String getUsername() {
        return username;
    }

    @NotNull
    public String getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id &&
                Objects.equals(username, user.username) &&
                Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

```kotlin
// kotlin

data class User(
    val id: Long,
    val username: String,
    val password: String
)
```

The `data` keyword causes the compiler to create the given properties and the usual `equals`, `hashCode`, `toString` methods. These are important to differenciate between objects of the same type.

Additionally the method `copy` is created with then can be used to copy an object easily. The copy method accepts every property of the data class as optional parameter to easily manipulate the copied object.

## Static methods

In Kotlin static methods are visually divided from the instance members.

```java
// java

public class User{
    private String firstName;
    private String lastName;

    public User(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getDisplayName(){
        return firstName + lastName;
    }

    public static getDisplayName(User user){
        return user.firstName + user.lastName;
    }
}

```

```kotlin
// kotlin

class User(
    var firstName: String,
    var lastName: String
){
    fun getDisplayName() = firstName + lastName
}

fun getDisplayName(user: User) = firstName + lastName
```

As you can see static methods get declared outside of the class body to visually divide instance and static methods.

## Sealed Classes

In Kotlin there are so called `sealed` classes which are useful when using `when` expressions to check if an object is of a given type.
At compile time the compiler knows what types are inheriting the sealed class and know what you can check in an `when` expression. For example:

```kotlin
// Kotlin
sealed class Expr
data class Const(val number: Double) : Expr()
data class Sum(val e1: Expr, val e2: Expr) : Expr()
object NotANumber : Expr()
```

```kotlin
// Kotlin
fun eval(expr: Expr): Double = when(expr) {
    is Const -> expr.number
    is Sum -> eval(expr.e1) + eval(expr.e2)
    NotANumber -> Double.NaN
    // the `else` clause is not required because we've covered all the cases
}
```

Sealed classes are  similar to enum values except that enum values are unique and cannot be instantiated whereas (subclasses of) sealed classes
can be insantiated. Sealed classes itself are abstract.

Also the Reddit user sebaslogen [explained it pretty well](https://www.reddit.com/r/androiddev/comments/8ktp6d/whats_your_favorite_feature_of_kotlin/dzbms10).

_Not to be confused with C#s `sealed` keyword, which is equal to non-`open` classes or `final` classes in java._

## Inline Classes

_best explaination can be found [here](https://typealias.com/guides/introduction-to-inline-classes/)_