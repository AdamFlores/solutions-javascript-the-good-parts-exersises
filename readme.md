Javascript the Good Parts Exercises
=====================

These are my solutions to the problems from "Javascript the Good Parts" Pluralsight course Authored by: Douglas Crockford available at [Javascript the Good Parts](http://pluralsight.com/training/courses/TableOfContents?courseName=javascript-good-parts)

1. Write a function that takes an argument and returns that argument.

   ```javascript
   identity(3) // 3
   ```

2. Write two binary functions, add and mul, that take two numbers and return their sum and their product.

   ```javascript
   add(3, 4) // 7
   mul(3, 4) // 12
   ```

3. Write a function that takes an argument and returns a function that returns that argument.

   ```javascript
   idf = identityf(3);
   idf()   // 3
   ```

4. Write a function that adds from two invocations

   ```javascript
   addf(3)(4) // 7
   ```

5. Write a function that takes a binary function, and makes it callable with two invocations.

   ```javascript
   addf = applyf(add);
   addf(3)(4)         // 7

   applyf(mul)(5)(6)  // 30
   ```

6. Write a function that takes a function and an argument, and returns a function that can supply a second argument.

   ```javascript
   add3 = curry(add, 3);
   add3(4)               // 7

   curry(mul, 5)(6)      // 30
   ```

7. Without creating any new functions, show three ways to create the inc function.

   ```javascript
   inc(5)       //6
   inc(inc(5))  //7
   ```

8. Write methodize, a function which converts a binary function to a method.

   ```javascript
   Number.prototype.add = methodize(add);
   (3).add(4)    // 7
   ```

9. Write demethodize, a function that converts a method to a binary function.

   ```javascript
   demethodize(Number.prototype.add)(5, 6)  // 11
   ```
