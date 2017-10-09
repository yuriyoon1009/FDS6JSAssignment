//함수 선언식

function triangle(cnt) {
    var sum = '';
    var starTotal = ''

    for (var i = 1; i <= cnt; i++) {
        for (var k = 1; k <= cnt - i; k++) {
            sum += ' ';
        }

        for (var x = 1; x <= 2 * i - 1; x++) {
            sum += '*';
        }
        sum += '\n'
    }
    starTotal += sum;
    return starTotal;
}

console.log(triangle(5))

//함수표현식 function expressions

var triangle = function(cnt) {
    var sum = '';
    var starTotal = ''

    for (var i = 1; i <= cnt; i++) {
        for (var k = 1; k <= cnt - i; k++) {
            sum += ' ';
        }

        for (var x = 1; x <= 2 * i - 1; x++) {
            sum += '*';
        }
        sum += '\n'
    }
    starTotal += sum;
    return starTotal;
}

console.log(triangle(5))