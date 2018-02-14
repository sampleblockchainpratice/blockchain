function fib(){
    var enternumber=document.getElementById('i1').value;
    var checkintnumber=parseInt(enternumber);
    var message='';
    if (euler1(enternumber)){
        message=enternumber+ " its fibbinoci";
    }
    else{
        message=enternumber+ "  is not fibbinoci";
    }
    document.getElementById('l2').innerHTML = message;
}

function euler1(limit){
    var limit=10;
    var even=0;
    var fib=1;
    for (var index=1;index<limit;index++){
        fib=fib+index;
        if(fib%2 == 0){
            even=even+fib;
        }
    
    }
    return even;
}