//var logic=require('./lib/logic.js');
var logicsleep=require('./logicsleep');
logicsleep.emitterlogic.on('Started',function(message){
    notifyuser(message);
});

logicsleep.emitterlogic.on('Even',function(message){
    notifyuser(message);
});


logicsleep.emitterlogic.on('Odd',function(message){
    notifyuser(message);
});


logicsleep.emitterlogic.on('Error',function(message){
    notifyuser(message);
});

var notifyuser=function(message){
    console.log(message);
};

logicsleep.evenoddfun(); 