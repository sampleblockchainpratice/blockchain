var prime=require('./lib/prime');

prime.emittertest.on('Started',function(message){
    notifyuser(message);
});
prime.emittertest.on('Found',function(message){
    notifyuser(message);
});
prime.emittertest.on('Completed',function(message){
    notifyuser(message);
});
prime.emittertest.on('Error',function(message){
    notifyuser(message);
});

var notifyuser=function(message){
    console.log(message);
};

prime.findprimetest();