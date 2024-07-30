import assert from 'assert';
import {regCheck} from  "../regCheck.js";

 
 describe('regCheckFunction' , function(){
    it('it should return "true" if the registration number ends with that for that specific province and "false" otherwise ', function(){
        assert.equal(regCheck('NP 234 HN GP', 'GP'), true);
    })
    it('it should return "true" if the registration number ends with that for that specific province and "false" otherwise ', function(){
        assert.equal(regCheck('NP 234 HN MP', 'GP'), false);
    })

})