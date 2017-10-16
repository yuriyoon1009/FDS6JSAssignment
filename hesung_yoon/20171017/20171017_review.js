//함수 호출 function expression
//charAt(n);
/*
1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.
단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를들어 8808은 3, 8888은 4로 카운팅 해야 한다.

*/
// by kiwan
var getNumOfAppearance = function() {
    //string
    var result = '';
    for (var i = 1; i <= 10000; i += 1) {
        result += i;
    }
    //console.log(result)
    //return result.match(/8/g).length;
    // (/8/g)
    // result = ['8','8'......'8']
    return result.match(/8/g).length;
}

console.log(getNumOfAppearance());

//ex
//var eight = /8/g;
//var test = '878888';
//var eightArr = test.match(eight); ['8',...'8']

/*
2. 짝수와 홀수
evenOrOdd 함수는 정수 num을 매개변수로 받는다.
num은 1이상의 정수이며, num이 음수인 경우는 없다.
num이 짝수일 경우 'Even'을 반환하고 홀수인 경우
'Odd'를 반환하도록 evenOrOdd에 코드를 작성하라.
단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.
*/

var evenOrOddIf = function(num) {
    if (num % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

var evenOrOddTernary = function(num) {
    //var res = (num % 2 === 0) ? 'Even' : 'Odd';
    //return res;
    return (num % 2 === 0) ? 'Even' : 'Odd';
}


console.log(evenOrOddIf(100));
console.log(evenOrOddIf(77));

console.log(evenOrOddTernary(100));
console.log(evenOrOddTernary(77));

/*
3. 문자열 다루기
alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다
*/

var alphaString46 = function(s) {
    //s = s ? s : '';
    if (s === null || s === undefined) {
        s = '';
    }
    // ^ : start
    // \d : ask either all number or not
    // {start, end} :length
    // $ : end
    var regExp = /^\d{4,6}$/;
    return regExp.test(s);
}


console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234'));
console.log(alphaString46('4444')); // false
console.log(alphaString46('')); // false
console.log(alphaString46());
console.log(alphaString46(null)); // false

//"ab2v9bc13j5jf4jv21" -> 9^2 + 13^2 + 5^2 + 21^2 = 716
// 주어진 문자열에서 홀수인 숫자들의 제곱의 합을 출력한다.  
// 지그재그 문제 : https://www.wanted.co.kr/wd/5684?referer_id=9794 
var findNum = function(string) {
    //1
    var regExp = /[0-9]+/g;
    var array = string.match(regExp);
    var res = 0;

    //console.log(array)
    //2
    array.map(function(odd) {
        if (odd % 2 === 1) {
            res += Math.pow(odd, 2);
        }
    })

    return res;
}

console.log(findNum("ab2v9bc13j5jf4jv21"));