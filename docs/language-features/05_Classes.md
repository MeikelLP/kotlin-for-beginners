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

This is especially useful when creating [data classes](#data-classes). As you can see you don't need curly brackets `{}` for the body if you only define class properties.

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

That's correct. Kotlin does not allow null values for `String` (unlike `String?`). Kotlin needs these default values to determine whether the properties shall be an optional parameter or not (see [Optional Parameter](03_Optional_Parameter.md)).

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