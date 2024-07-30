import assert from 'assert';
 import {countAllPaarl} from  "../countAllPaarl.js";


describe('countAllPaarlFunction' , function(){
    it('it should return the number of registration plates that represent Paarl which start with "CJ"', function(){
        assert.equal(countAllPaarl('CJ 20 01, CT 20 04'), 1);
    })
    it('it should return the number of registration plates that represent Paarl which start with "CJ"', function(){
        assert.equal(countAllPaarl('CV 20 01, CT 20 04'), 0);
    })

})