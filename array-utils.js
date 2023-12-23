/*
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Flattens an array of arrays of infinite depth into a single-dimension array.
 *
 * > This method is deprecated as it is now natively in JavaScript as the `flat`
 * > method on an Array instance:
 * > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 *
 * @deprecated Can be replaced with `array.flat(Infinity)`
 * @param {Array<any>} array
 * @return {Array<any>} Flattened array.
 */
export function flatten(array) {
	return array.reduce((acc, value) => {
		return acc.concat(Array.isArray(value) ? flatten(value) : value);
	}, []);
}

/**
 * Creates an array of numbers from the starting value (inclusive) to the end
 * (exclusive), with an optional step (the gap between values).
 *
 * @param {Number} start
 *   The value to start at, the first item in the returned array.
 * @param {Number} end
 *   The value to end with, the last item in the returned array.
 * @param {Number} [step=1]
 *   The increment/gap between values, defaults to 1.
 * @return {number[]} An array encompassing the given range.
 */
export function range(start, end, step = 1) {
	return Array.apply(0, Array(Math.ceil((end - start) / step))).map((empty, index) => index * step + start);
}

/**
 * A function to execute on each item in an array, returning truthy
 * if the item passes whatever test is required for the use of this
 * predicate.
 *
 * @template T
 * @callback Predicate<T>
 * @param {T} item
 * @return {boolean}
 */

/**
 * Remove and return the first item from `array` that matches the predicate
 * function.
 *
 * @template T
 * @param {T[]} array
 * @param {Predicate<T>} predicate
 *   Function to test each item of the array with.  If it returns a truthy value
 *   for the item, then that item is removed and returned.
 * @return {T | undefined} The matching item, or `undefined` if no match was found.
 */
export function remove(array, predicate) {
	return array.find((item, index) => {
		if (predicate(item)) {
			array.splice(index, 1);
			return item;
		}
		return false;
	});
}
