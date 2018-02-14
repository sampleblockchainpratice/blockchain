var number=7;
var index=2;
var isPrime=true;
while(index<number/2){
if(number%index == 0)
{
    isPrime = false;
    break;
}
index=index+1;
if(isPrime)
{
    console.log("prime")
}
}
