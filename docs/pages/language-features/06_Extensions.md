---
layout: post
---
# Extensions

Like in C# Kotlin brings extensions to the JVM. For anyone wondering what extension methods are: _Extension methods are static methods having access to private properties of a class_ (basically). Extension methods shall not be contained in the class itself. More likely they are stored in "extension" classes. The following example shows a simple use case of extensions using the Kotlin I/O API.

```java
// Java

File file = new File("test.txt");
String content = null;

try (FileInputStream is = new FileInputStream(file)) {
    content = new String(is.readAllBytes());
} catch (IOException e) {
    // must have in java even if you don't want to do anything.
}

System.out.println(content);    // Output: Hello World!


File newFile = new File("new.txt");
String newContent = content.replace("World", "Java");

try (FileOutputStream os = new FileOutputStream(newFile)) {
    os.write(newContent.getBytes());
} catch (IOException e) {
    // must have in java even if you don't want to do anything.
}

System.out.println(newContent); // Ouput: Hello Java!
```

```kotlin
// Kotlin

val file = File("test.txt")
val content = file.readText()

println(content)            // Output: Hello World!


val newContent = content.replace("World", "Kotlin")
val newFile = File("new.txt").also {
    it.writeText(newContent)
}

println(newFile.readText()) // Output: Hello Kotlin!
```

Here you can see the simplicity of the Kotlin file API. Kotlin is much easier to read even for someone who does not understand Java / Kotlin or equal.

Furthermore you can see that Kotlin does not have any form of checked exceptions. In most cases the place where you read the file is not the best place to handle it. These forced `try-catch` blocks decrease readability and the happiness of a developer. Anyway you still can catch the exception if nessesary.

The keyword `also` is used to "work" on the object without changing the return type of `newFile`. `it` represents the return value of `File("new.txt")`. You can also use `apply` instead of `also` but with the difference that `apply` uses `this` as reference which may cause unwanted shadowing.

## See also

* [Official Kotlin I/O API reference](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/index.html)
* [Standard Library (also, apply, ...)](https://kotlinlang.org/docs/reference/whatsnew11.html#standard-library)