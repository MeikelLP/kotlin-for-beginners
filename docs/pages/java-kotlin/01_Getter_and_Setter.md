---
categories: ["Java & Kotlin"]
---

# Getter & Setter

You can call getter and setter from Kotlin in Java and visa versa

```kotlin
// Kotlin

class KotlinUser(var name: String)

fun main (args: Array<String>) {
    var kUser = KotlinUser("Peter")
    kUser.name = "Michael"
    println(kUser.name)

    var jUser = JavaUser("Peter")
    jUser.name = "Michael"
    println(jUser.name)
}
```

```java
// Java

public class JavaUser{
    private String name;

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public static void main(String[] args){
        KotlinUser kUser = new KotlinUser("Peter");
        kUser.setName("Michael");
        System.out.println(kUser.getName());


        JavaUser jUser = new JavaUser("Peter");
        jUser.setName("Michael");
        System.out.println(jUser.getName());
    }
}

```
