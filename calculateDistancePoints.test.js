const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('should return result', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);
    
            const expected = 86;
    
            assert.equal(actual, expected);
        });

        it('should return result', () => {
            const actual = calculateDistancePoints(106.5, 'normal', 98);
    
            const expected = '77';
    
            assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('should return result', () => {
            const actual = calculateDistancePoints(134, 'big', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });

        it('should return result', () => {
            const actual = calculateDistancePoints(119.5, 'big', 120);

            const expected = 59.1;

            assert.equal(actual, expected);
        });
    });

    describe('mamut', () => {
        it('should return result', () => {
            const actual = calculateDistancePoints(227.5, 'mamut', 200);

            const expected = 153;

            assert.equal(actual, expected);
        });

        it('sshould return result', () => {
            const actual = calculateDistancePoints(170, 'mamut', 200);

            const expected = 84;

            assert.equal(actual, expected);
        });
    });
});