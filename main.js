function calculateAverage() {
    let val1 = parseInt(document.getElementById("value1").value); 
    let val2 = parseInt(document.getElementById("value2").value); 
    let val3 = parseInt(document.getElementById("value3").value); 

    let averageValue = (val1 + val2 + val3) / 3;
    document.getElementById("result").innerHTML = averageValue;
}
