
array-utils
===========

[![Build Status](https://github.com/ultraq/array-utils/actions/workflows/build.yml/badge.svg)](https://github.com/ultraq/array-utils/actions)
[![codecov](https://codecov.io/gh/ultraq/array-utils/branch/main/graph/badge.svg?token=FWOPN1XXZW)](https://codecov.io/gh/ultraq/array-utils)
[![npm](https://img.shields.io/npm/v/@ultraq/array-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/array-utils)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@ultraq/array-utils)](https://bundlephobia.com/result?p=@ultraq/array-utils)

A collection of array utilities, meant as a zero-dependency way of working with
arrays.


Installation
------------

Via npm:

```
npm install @ultraq/array-utils
```


API
---

### flatten(array)

Flattens an array of arrays of infinite depth into a single-dimension array.

> This method is deprecated as it is now natively in JavaScript as the `flat`
> method on an Array instance:
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

 - **array**: The array of arrays to flatten

### range(start, end, step)

Creates an array of numbers from the starting value (inclusive) to the end
(exclusive), with an optional step (the gap between values).

 - **start**: The value to start at, the first item in the returned array.
 - **end**: The value to end with, the last item in the returned array.
 - **step**: The increment/gap between values, defaults to 1.

### remove(array, predicate)

Remove and return the first item from `array` that matches the predicate
function.

 - **array**: The array to search and remove an item from
 - **predicate**: Function to test each item of the array with.  If it returns a
   truthy value for the item, then that item is removed and returned.
