# TypeScript Type 'string' is not assignable to type 'number' Bug

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'.  This occurs when a string value is assigned to a variable declared as a number.

The `bug.ts` file contains the buggy code.  The `bugSolution.ts` file shows how to fix it.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts`.
3. Try to run it. You'll see the type error.

## Solution

The solution involves ensuring that the values assigned to number variables are indeed numbers.  This might involve type checking, input validation, or using type guards.