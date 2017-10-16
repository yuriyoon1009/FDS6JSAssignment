/*12. 약수의 합

어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라.
예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고,
총 합은 28이 되므로 28을 반환한다.

약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다
*/

var sumDivisor = function(num) {
    var arr = [];
    var res = 0;
    for (var i = 1; i <= num; i++) {
        if (Number.isInteger(num / i)) {
            arr.push(i)
        }
    }

    arr.map(function(divisor) {
        res += divisor;
    })

    return res;
}

console.log(sumDivisor(12)); //28 

/*

#13. 소수 찾기

numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다.
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록
numberOfPrime 함수를 완성하라.

소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다.
즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …

예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.
*/
var numberOfPrime = function(n) {

    var obj = [];
    var count;
    for (var i = 1; i <= n; i++) {
        //obj.push(i);
        count = 0;
        for (var k = 1; k <= i; k++) {
            if (i % k === 0) {
                count++;
            }
        }
        if (count === 2) {
            obj.push(i);
        }
    }
    return obj.length;
}

console.log(numberOfPrime(10)); // 4

/*
#14. 피보나치 수

피보나치 수는 0과 1로 시작하며,
다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
610, 987, 1597, 2584, 4181, 6765, 10946…

2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라.
예를 들어 n = 3이라면 2를 반환한다.
*/

var fibonacci = function(n) {
    var fibo = [0, 1];
    var last;
    for (var i = 0; i < n - 1; i++) {
        //reset variable last
        last = 0;
        last = fibo[i + 1] + fibo[i];
        fibo.push(last);
    }
    return fibo[fibo.length - 1];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

/*
#15. 하샤드 수

하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48,
50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102,
108, 110, 111, 112, 114, 117, 120, 126, 132,
133, 135, 140, 144, 150, 152, 153, 156, 162,
171, 180, 190, 192, 195, 198, 200

Harshad함수는 양의 정수 n을 매개변수로 입력받는다.
이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.
*/


var isHarshad = function(n) {
    // number to string 
    //var string = n.toString()

    //string to number
    //1. parseInt(string); 2. +'string'

    // 1. convert number to string
    n += '';
    var sum = 0;
    var array = n.split('');

    /* 2. Array.prototype.map() : create a new array with the results of
    calling a provied function */
    array.map(function(num) {
        // convert string to number
        // sum all item in array
        sum += num * 1;
    })

    // 3. divide n by sum. if the answer is integer, return true.
    return Number.isInteger(n / sum)
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13));