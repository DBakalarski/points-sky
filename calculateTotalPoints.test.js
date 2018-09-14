const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('windFactor and gateFactor change', () => {
        it('should work for negative windFactor and negative gateFactor', () => {
            const actual = calculateTotalPoints(106, "normal", 98, [18.5, 19, 18.5, 18.5, 18.5] , -12, -5);
    
            const expected = 114.5;
    
            assert.equal(actual, expected);
        });

        it('should work for negative windFactor and positive gateFactor', () => {
            const actual = calculateTotalPoints(134, "big", 120, [19,20,19.5,19,18.5] , -5.4, 0);
    
            const expected = 137.3;
    
            assert.equal(actual, expected);
        });

        it('should work for positive windFactor and positive gateFactor', () => {
            const actual = calculateTotalPoints(227.5, "mamut", 200, [18,18.5,17.5,18.5,18.5] , 8.7, 8.4);
    
            const expected = 225.1;
    
            assert.equal(actual, expected);
        });
    });
});