# Maven Compiler Package

The RIDE compiler is [published as a Maven artefact](https://mvnrepository.com/artifact/com.wavesplatform/lang) so that it can be used from any JVM-based project.

In order to add the package as a project dependency, use:

##### For Maven
```xml
<dependency>
    <groupId>com.wavesplatform</groupId>
    <artifactId>lang</artifactId>
    <version>1.0.0</version>
</dependency>
```
##### For Gradle
```groovy
compile group: 'com.wavesplatform', name: 'lang', version: '1.0.0'
```
##### For SBT
```scala
libraryDependencies += "com.wavesplatform" % "lang" % "1.0.0"
```

There's single entry point to the package, the `Lang` class. It currently contains two static methods:
* `compile` compiles a program text to an opaque object representing the root of an abstract syntax tree.
* `serialize` converts the compiled tree into bytecode, and returns a byte array.

##### Code example
```java
    // compile the script
    String script = "let h = height; h > 100000";
    Terms.EXPR expr = Lang.compile(script);
    System.out.println(expr);
    // prints: BLOCK(LET(h,REF(height)),FUNCTION_CALL(Native(102),List(REF(h), CONST_LONG(100000))))

    // now produce bytecode for the compiled script
    byte[] bytes = Lang.serialize(expr);
    System.out.println(Base64.encode(bytes));
    // prints: BAAAAAFoBQAAAAZoZWlnaHQJAABmAAAAAgUAAAABaAAAAAAAAAGGoA==
```
