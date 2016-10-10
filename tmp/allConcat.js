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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output =  simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

exports.calculatorModule = Calculator;

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
