function count(){
      for (index=2;index<count;index++)
    {
        var rtw=Math.random()*50000;
        setTimeout(function(){
            IsPrime(index);
        },rtw);
        var rtw=Math.random()*20000;
        setTimeout(function(){
            evenodd(index);
        },rtw);
        
    }   
}
function IsPrime(index) {
    var ind = 2;
    var isPrime = true;
    for (ind = 2; ind < Math.floor(index/2); ind++) {
        if(index%ind == 0)
        {
            isPrime = false;
            console.log(index+ "is not prime number");
                }        
    }
    console.log(index+ " is prime number");

}

function evenodd(index){
    if (index%2==0){
        console.log(index+  " is even number")
    }
    console.log(index+  "is odd number")
}

console.log(count(100));
