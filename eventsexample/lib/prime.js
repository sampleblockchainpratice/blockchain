var events = require ('events');
var emitter = new events.EventEmitter();

function findprime(){
    let count=0;
    emitter.emit('Started','started the program');
    try {
        for(let index=2;index<30;index++){
            if(checkprime(index) == true) {
                count++;
             setTimeout(function(){
                 emitter.emit('Found',index)
             },2000*count);
     
            }
         }    
        
    } catch (error) {
         setTimeout(function(){
        emitter.emit('Error','program finished with Error')
    },40000);   
    }
     
}

function checkprime(number) {
    var primenumber=true;   
    for (let index=2;index<Math.floor(number/2);index++){
        if(number%index ==0)
        {
            primenumber=false;
            break;
        }
                   
    }
    return primenumber;
}



module.exports.emittertest=emitter;
//module.exports.start=start;
module.exports.findprimetest=findprime;