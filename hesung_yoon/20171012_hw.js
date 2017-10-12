/*
check palindrom
palindrome 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 
다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다.
인자로 전달한 문자열이 palidrome인지 검사하여 boolean값을 반화하는 
함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.
*/

function checkPalindrom(s) {
    //var reg = new RegExp('^\\d+$');
    var reg = new RegExp(/\d+/);
    if (reg.test(s) !== true) {
        //if( isNaN(+s) ){
        //var reg = new RegExp('^[0-9]$');
        if (s.length > 1) {
            var reverse = s.split('').reverse().join('');
            return s === reverse;
        }
        return false;
    }

    return false;
}

console.log(checkPalindrom('dad')); //true
console.log(checkPalindrom('mom')); //true 
console.log(checkPalindrom('palindrom')); //false
console.log(checkPalindrom('s')); //false
console.log(checkPalindrom('2bb2')); // want to return false
console.log(checkPalindrom('222'));

//배열의 최대/최소값 구하기

function max() {
    return Math.max.apply(null, arguments);
}

console.log(max(1, 2, 3, 4));

function min() {
    return Math.min.apply(null, arguments);
}

console.log(min(3, 1, -1, 4))

var res = 0;

function divide(num) {
    for (var i = 1; i <= num; i++) {
        if (Number.isInteger(num / i)) {
            var ans = num / i;
            res += ans;
        }
    }
    return res;
}

console.log(divide(12)) // 


// 핸드폰 번호 가리기
function hideNumber(num) {
    var res = '';
    for (var i = 0; i < num.length - 4; i++) {
        res += '*';
    }
    return res + num.substr(num.length - 4, num);
}

console.log(hideNumber('343948349839'));