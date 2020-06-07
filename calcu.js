var numFiled1 = document.getElementById('numFiled1');
var numFiled2 = document.getElementById('numFiled2');
var resultFiled = document.getElementById('resultFiled');
var form = document.getElementById('xIsWhatOfY');

form.addEventListener('submit', function(event) {
    
    if (!numFiled1.value || !numFiled2.value) {
        alert("Please Enter values in the fields!");
    } else {
        var x = parseFloat(numFiled1.value);
        var y = parseFloat(numFiled2.value);
        
        var result = x / y;
        var percent = result * 100;
        
        resultFiled.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
  
});