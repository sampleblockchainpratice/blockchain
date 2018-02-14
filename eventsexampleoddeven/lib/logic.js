var events = require ('events');
var emitter = new events.EventEmitter();

function evenodd(){
    let count=0;
emitter.emit('Started','started the program logic');
try {
    for (let index=1;index<20;index++){
        if(evenoddlogic(index) == true ){
            count++;
             setTimeout(function(){
                 emitter.emit('Even',index + '  is even number')
             },2000*count);
        }
        else {
            count++;
            setTimeout(function(){
                emitter.emit('Odd',index + '  is odd numner')
            },2000*count);
        }
    }
} catch (error) {
    setTimeout(function(){
        emitter.emit('Error','Program aborted with error')
    },40000);
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