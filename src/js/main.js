function getValues() {
    var results = [];
    var i = 0;
    do {
        results[i++] = +prompt('Введите число');
        var isProcess = confirm('Продолжить?')
    } while (isProcess);

    return results;
}
function calculator () {
do {
    var numbers = getValues();
    var res = numbers[0];
    for (var i = 0; i < numbers.length; i = i + 2) {
        res += numbers[i];
    }
    alert('Итого ' + res)

    var isProcess = confirm('Продолжить?');

} while (isProcess);
}

function triangle(lines, sign) {
    var line = sign;

    for ( var i = 0; i < lines; i++) {
        console.log (line);
        line += sign;
    }
}

triangle(6, '-');

function triangleRevers (lines, sign) {
    var strings = [];
    var line;

    for (var i = 0; i < lines; i++) {
        line = '';
        for (var j = 0; j < lines - i; j++) {
            line += sign;
        }
        strings[i] = line;
        console.log(strings[i]);
        
    }
}
triangleRevers(6, '*');

var values = ['',''];
var action = '';
var index =0;
var inputEl = document.querySelector('.calculator_input');
var numberContainer = document.querySelector('.button')

function handleNumberClick(e) {
    var v = e.target.dataset.value;
    
    if (v) {
        values[index] += v;
        inputEl.value = values[0] + '' + action + '' + values[1];
    }
     
}

function handleActionClick (e) {
    var v = e.target.dataset.value;

    if 
}