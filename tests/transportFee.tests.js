import assert from 'assert';
import {transportFee} from '../transportFee.js';
describe('transportFee function tests...', function() {
    it('..It should returns the fee"', function() {
        assert.equal(transportFee('morning'), 'R20');


        assert.equal(transportFee('afternoon'), 'R10');


        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

       
    });

    it('..It should returns the R10"', function() {
        (transportFee('afternoon'), 'R10');



       
    });
});
