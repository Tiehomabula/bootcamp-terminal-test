import assert from 'assert';
 import {isFromBellville} from  "../isFromBellville.js";





describe('isFromBelvilleFunction' , function(){
    it('it should return "true" when a registration number starts with "CY" and "false" for anything else ', function(){

        assert.equal(isFromBellville('CY 123 456'), true);

        
    });

    it('it should return "true" when a registration number starts with "CY" and "false" for anything else ', function(){

        assert.equal(isFromBellville('YT 345 678'), false);

        
    });

});