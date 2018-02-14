var events = require ('events');
var emitter = new events.EventEmitter();
var sleep = require('system-sleep');

function evenodd(){
    let count=0;
emitter.emit('Started','started the program logic');
try {
    for (let index=1;index<20;index++){
        if(evenoddlogic(index) == true ){
            count++;
             emitter.emit('Even',index + '  is even number');
             sleep(1000)*count;
             
        }
        else {
            count++;
            emitter.emit('Odd',index + '  is odd numner');
            sleep(2000)*count;
        }
    }
} catch (error) {
     emitter.emit('Error','Program aborted with error');
    sleep(2000)*count;
}
}


function evenoddlogic(number){
    let evennumber=false;
    
    if (number%2==0){
        evennumber=true;
        return evennumber;
        }
        
}

module.exports.emitterlogic=emitter;
module.exports.evenoddfun=evenodd;