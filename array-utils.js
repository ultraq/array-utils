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
 * Flattens an arrays of arrays into a single array.
 * 
 * @param {Array} array
 * @return {Array} Flattened array.
 */
export function flatten(array) {

	return array.reduce((accumulator, value) => {
		return accumulator.concat(Array.isArray(value) ? flatten(value) : value);
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
 * @return {Array} An array encompassing the given range.
 */
export function range(start, end, step = 1) {

	return Array.apply(0, Array(Math.ceil((end - start) / step))).map((empty, index) => index * step + start);
}
