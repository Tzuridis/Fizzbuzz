var supply = window.prompt('Supply an integer:');
if (supply !== Number) {
    parseInt(supply);
    console.log(fizzbuzz(supply));
} else if (supply === String) {
    document.write('Unable to comply, value is not a number!')
}


function fizzbuzz(supply) {
    for (i = 1; i < supply; i++) {
        if (i % 15 === 0) {
            document.write('FizzBuzz');
            document.write('<br/>');
        } else if (i % 3 === 0) {
            document.write('Fizz');
            document.write('<br/>');
        } else if (i % 5 === 0) {
            document.write('Buzz');
            document.write('<br/>');
        } else {
            document.write(i);
            document.write('<br/>');
        }
    }
}