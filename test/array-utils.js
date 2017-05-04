/* eslint-env mocha */
import {flatten, range} from '../array-utils';
import {assert} from 'chai';

/**
 * Tests for the array utilities.
 */
describe('Arrays', function() {

	describe('#flatten', function() {

		it('Flattens a nested array', function() {
			let result = flatten([1, [2, [[3], 4], 5]]);
			assert.deepEqual(result, [1, 2, 3, 4, 5]);
		});
	});

	describe('#range', function() {

		it('Returns a range of values from start to finish', function() {
			let result = range(2, 5);
			assert.deepEqual(result, [2, 3, 4]);
		});

		it('Returns a range of values incrementing by the specified value', function() {
			let result = range(2, 10, 3);
			assert.deepEqual(result, [2, 5, 8]);
		});
	});
});
