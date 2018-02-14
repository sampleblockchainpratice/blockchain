// logic to find the prime number
var findevenodd = function(number,clf){
    var wait=Math.floor(Math.random()*5000);
    if(number%2 == 1){
        setTimeout( 
            function () {
            var odd= new Error (number);
            clf(odd,null);
        },wait);
    }
    else{
        setTimeout( 
            function () {
            clf(null,number);
    },wait);
}
    

}

//callback function--callbackfunction
function callbackfunction (odd,even){
    if (odd){
        console.log("number is odd number and the number is "   +  odd);
    }
    else{
        console.log("number is even number and the number is "   + even);
    }
}

//calling and declaring function

for (i=1;i<=20;i++){
    findevenodd(i,callbackfunction);
} 