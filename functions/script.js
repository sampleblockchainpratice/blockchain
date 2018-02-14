var number=7887;
var temp=0;
var reverse=0;
while (number > 0){
    temp=Math.floor(number)%10;
    number=Math.floor(number)/10;
    reverse=reverse*10+temp;
    
}
//document.getElementById("reverse")
//window.alert("reverse");
console.log("reverse");
