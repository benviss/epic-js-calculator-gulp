var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculator').submit(function(event){
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output;
    if($('#math-select').val() === "add") {
    output = simpleCalculator.Add(num1 ,num2);
    } else if ($('#math-select').val() === "subtract") {
    output = simpleCalculator.Subtract(num1 ,num2);
    } else if ($('#math-select').val() === "divide") {
    output = simpleCalculator.Divide(num1 ,num2);
    } else if ($('#math-select').val() === "multiply") {
    output = simpleCalculator.Multiply(num1 ,num2);
    }
    
    $('#solution').append(output);
  });
});

exports.calculatorModule = Calculator;
