
import assert from 'assert';
 import {countRegNumber} from  "../countRegNo.js";


describe('countRegNumber' , function(){
    it('it should return the number of registration numbers when the registration numbers are listed ', function(){

        assert.equal(2, countRegNumber('CY 123 456 GP, TN 223 081 MP'));

        
    });

    it('it should return the number of registration numbers when the registration numbers are listed ', function(){

        assert.equal(1, countRegNumber('TN 223 081 MP'));
      });

});
