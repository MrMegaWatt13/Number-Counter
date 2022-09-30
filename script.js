var count = 0;

var max = window.prompt("Input Number");
max = Number(max);

const theTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    document.getElementById("count").innerHTML = count;
    if(count >= max){
        clearInterval(theTimer)
    }
}
