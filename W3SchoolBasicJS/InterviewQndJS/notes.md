# Notes

# 1. JavaScript vs Java

## What is JavaScript?
JavaScript is a **scripting language** primarily used for creating dynamic and interactive content on web pages. It is lightweight, interpreted, and runs directly in web browsers.

### Key Features of JavaScript:
- **Interpreted Language**: Executes directly without prior compilation.
- **Dynamic Typing**: Variable types are determined at runtime.
- **Prototype-Based**: Uses objects and prototypes for inheritance.
- **Event-Driven**: Commonly used for handling user events (e.g., clicks, hovers).
- **Platform Independence**: Can run on any browser or platform with a JavaScript engine.
- **Client-Side**: Often executed on the client side for better user interaction.

---

## What is Java?
Java is a **programming language** designed for building standalone applications, web applications, and enterprise systems. It is object-oriented and requires compilation before execution.

### Key Features of Java:
- **Compiled Language**: Java code is compiled into bytecode, which runs on the Java Virtual Machine (JVM).
- **Static Typing**: Variable types are checked at compile time.
- **Class-Based**: Relies on classes and objects for structure and inheritance.
- **Robust and Secure**: Known for strong memory management and built-in security features.
- **Platform Independence**: "Write Once, Run Anywhere" (WORA) due to the JVM.
- **Server-Side**: Frequently used for backend development in enterprise applications.

---

## Differences Between JavaScript and Java:

| Feature                | JavaScript                          | Java                           |
|------------------------|-------------------------------------|--------------------------------|
| **Type**              | Scripting Language                  | Programming Language           |
| **Compilation**       | Interpreted                         | Compiled (into bytecode)       |
| **Typing**            | Dynamic                            | Static                         |
| **Execution**         | Runs in browsers                   | Runs on JVM                    |
| **Usage**             | Client-Side Interactivity          | Server-Side Applications       |
| **Inheritance**       | Prototype-Based                    | Class-Based                    |
| **Platform**          | Browser-Based                      | Cross-Platform via JVM         |
| **Syntax**            | Lightweight, simpler syntax         | More verbose, stricter syntax  |

---

## Use Cases:
- **JavaScript**: Interactive web pages, front-end development, event handling.
- **Java**: Backend systems, mobile applications (Android), enterprise-level software.

---

## Conclusion:
Despite similar names, Java and JavaScript serve different purposes and are suited for different types of tasks in software development. 


--- X --


# 2. # JavaScript Data Types

JavaScript supports various data types that can be categorized into **primitive** and **non-primitive (reference)** types.

---

## Primitive Data Types
These are immutable data types and are directly stored in the stack.

1. **String**
   - Represents textual data.
   - Example:
     ```javascript
     let name = "John";
     ```

2. **Number**
   - Represents both integer and floating-point numbers.
   - Example:
     ```javascript
     let age = 30;
     let price = 19.99;
     ```

3. **BigInt**
   - Used for integers larger than the `Number` type can handle (greater than \(2^{53} - 1\)).
   - Example:
     ```javascript
     let bigNumber = 123456789012345678901234567890n;
     ```

4. **Boolean**
   - Represents logical values: `true` or `false`.
   - Example:
     ```javascript
     let isAvailable = true;
     ```

5. **Undefined**
   - A variable that has been declared but not assigned a value.
   - Example:
     ```javascript
     let result;
     console.log(result); // undefined
     ```

6. **Null**
   - Represents the intentional absence of a value.
   - Example:
     ```javascript
     let data = null;
     ```

7. **Symbol**
   - Used to create unique identifiers.
   - Example:
     ```javascript
     let id = Symbol("uniqueId");
     ```

---

## Non-Primitive (Reference) Data Types
These are mutable and stored as references in memory.

1. **Object**
   - A collection of key-value pairs.
   - Example:
     ```javascript
     let person = {
       name: "John",
       age: 30,
     };
     ```

2. **Array**
   - An ordered collection of values.
   - Example:
     ```javascript
     let colors = ["red", "green", "blue"];
     ```

3. **Function**
   - A block of reusable code.
   - Example:
     ```javascript
     function greet() {
       console.log("Hello!");
     }
     ```

4. **Date**
   - Used to work with dates and times.
   - Example:
     ```javascript
     let today = new Date();
     ```

---

## Special Data Types

1. **Infinity**
   - Represents infinity, returned when dividing by zero or exceeding the largest possible number.
   - Example:
     ```javascript
     let result = 1 / 0; // Infinity
     ```

2. **NaN (Not-a-Number)**
   - Represents an invalid number operation.
   - Example:
     ```javascript
     let invalid = "hello" * 3; // NaN
     ```

---

## Type Checking
You can use the `typeof` operator to check the data type.
```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (a historical bug in JavaScript)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {}); // "object"


-- X --

# 3. Comparison of `var`, `let`, and `const`

| Feature          | `var`                        | `let`                | `const`              |
|------------------|------------------------------|----------------------|----------------------|
| **Scope**        | Function-scoped             | Block-scoped         | Block-scoped         |
| **Hoisting**     | Yes, initialized to `undefined` | Yes, temporal dead zone | Yes, temporal dead zone |
| **Re-declaration** | Allowed                   | Not allowed          | Not allowed          |
| **Re-assignment** | Allowed                   | Allowed              | Not allowed          |

# When to Use `var`, `let`, and `const`

- **Use `const`**:
  - By default, for values that won't change.
  - Ensures immutability and prevents accidental reassignments.

- **Use `let`**:
  - For variables that will change over time.
  - Useful in loops or conditions where the value is updated.

- **Avoid `var`**:
  - In modern JavaScript, `var` is considered outdated due to its lack of block scope and potential hoisting issues.
  - Prefer `let` or `const` for better clarity and predictability in code.

-- X -- 
# Web development Language
HTML to define the content of web pages
CSS to define the layout of web pages
JavaScript to program the behavior of pages

-- X -- 






