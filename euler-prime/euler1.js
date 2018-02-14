function euler1(limit){
    var isprime=true;
    var number=0
    for(index=1;index<(Math.floor(limit))/2;index++){
        if(limit%index==0){
            isprime=true;
            number=index;
           }
            }
    return number;
}