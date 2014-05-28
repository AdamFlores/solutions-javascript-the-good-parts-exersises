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
   addf(3)(4)          // 7
   applyf(mul)(5)(6)  // 30
   ```
