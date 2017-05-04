
array-utils
===========

[![Build Status](https://travis-ci.org/ultraq/array-utils.svg?branch=master)](https://travis-ci.org/ultraq/array-utils)
[![npm](https://img.shields.io/npm/v/@ultraq/array-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/array-utils)
[![License](https://img.shields.io/github/license/ultraq/array-utils.svg?maxAge=2592000)](https://github.com/ultraq/array-utils/blob/master/LICENSE.txt)

A collection of array utilities, meant as a zero-dependency way of working with
arrays.


API
---

### flatten(array)

Flattens an arrays of arrays, returning the newly-flattened array.

 - **array**: The array of arrays to flatten

### range(start, end, step)

Creates an array of numbers from the starting value (inclusive) to the end
(exclusive), with an optional step (the gap between values).

 - **start**: The value to start at, the first item in the returned array.
 - **end**: The value to end with, the last item in the returned array.
 - **step**: The increment/gap between values, defaults to 1.