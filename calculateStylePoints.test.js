const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('styleNotes', () => {
    describe('different', () => {
        it('should work for five different number', () => {
            const actual = calculateStylePoints([18,17,16,15,14]);
    
            const expected = 48;
    
            assert.equal(actual, expected);
        });
    });

    describe('the same', () => {
        it('should work for five the same number', () => {
            const actual = calculateStylePoints([18,18,18,18,18]);

            const expected = 54;

            assert.equal(actual, expected);
        });

        it('should work for four the same number', () => {
            const actual = calculateStylePoints([10,10,10,10,15]);

            const expected = 30;

            assert.equal(actual, expected);
        });

        it('should work for three the same number', () => {
            const actual = calculateStylePoints([9,9,9,17,15]);

            const expected = 33;

            assert.equal(actual, expected);
        });

        it('should work for two the same number', () => {
            const actual = calculateStylePoints([15,15,12,11,8]);

            const expected = 38;

            assert.equal(actual, expected);
        });

    });

    describe('half number', () => {
        it('should work for five different number with half number', () => {
            const actual = calculateStylePoints([15.5,12.5,8.5,19.5,13.5]);

            const expected = 41.5;

            assert.equal(actual, expected);
        });

        it('should work for five the same number with half number', () => {
            const actual = calculateStylePoints([15.5,15.5,15.5,15.5,15.5]);

            const expected = 46.5;

            assert.equal(actual, expected);
        });
    });
});