import assert from 'assert';
 import {isWeekday} from  "../isWeekday.js";

 describe('isWeekdayFunction' , function(){
    it('it should return "true" if the day entered is a weekday and "false" for the weekend ', function(){
        assert.equal(isWeekday('Wednesday'), true);
    })
    it('it should return "true" if the day entered is a weekday and "false" for the weekend ', function(){
        assert.equal(isWeekday('Saturday'), false);
    })

})