/*
# 1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를들어 8808은 3, 8888은 4로 카운팅 해야 한다.

(hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

```javascript
function getCount8 () {

}

console.log(getCount8()); // 4000
```
*/

var array;
var eight = [];

for (var i = 1; i <= 10000; i++) {
    //var num = i;
    var string = i.toString();
    //console.log(i.toString());
    array = string.split('');
    //array = [1] ... [8]
    for (var k = 0; k <= i; k++) {
        if (array[k] == 8) {
            var eightArray = array.join();
            eight.push(parseInt(eightArray));
        }
    }
}
console.log(array)
console.log(eight.length)
    //4000  

//regExp
function eightsRegExp() {
    var count = 0;
    for (var i = 1; i <= 10000; i++) {
        count += ((i + "").split(/8/g).length - 1);
    }
    return count;
}

console.log(eightsRegExp());

/*
# 19. 배열에서 특정 값만을 구하기
배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라
*/

function getArray(arr) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] > 3) {
            res.push(arr.slice(i, i + 1)[0]);
        }
    }
    return res;
}

var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]

/*
# 20. 평균구하기

배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

*/

function average(array) {
    var res = 0;
    array.map(function(item) {
        res += item;
    });
    return res / array.length;
}

var testArray = [5, 3, 4];
console.log(average(testArray)); // 4


// min 

/*
# 22. 특별한 정렬

n개의 정수를 가진 배열이 있다. 이 배열은 양의 정수와 음의 정수를 모두 가지고 있다. 이 배열을 좀 특별한 방법으로 정렬해야 한다. 음의 정수는 앞쪽에 내림차순으로, 양의 정수는 뒷쪽에 있어야 한다. 단, 인수로 주어진 원본 배열은 변경되지 않아야 한다.

예를 들어, [-1, 1, 3, -2, 2, 0]이 주어졌을 때,  [-1, -2, 0, 1, 2, 3]를 반환한다.
*/


function specialSort(array) {
    array.sort(function(a, b) { return a - b });
    return array;
}

var testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]

/*
# 23. 임의 범위 내의 각 숫자 분해하여 곱한 값의 전체 합

임의 범위 내의 각 숫자를 분해하고 분해한 값을 곱한 후, 곱한 값의 전체 합을 구하는 함수를 완성하라.
예를 들어, 예로, 10 ~ 13까지의 각 숫자 분해하여 곱한 값의 전체 합은 다음과 같다.

10 = 1 * 0 = 0
11 = 1 * 1 = 1
12 = 1 * 2 = 2
13 = 1 * 3 = 3

0 + 1 + 2 + 3 = 6
*/

function multiSum(from, to) {

    var arr = [];
    var res = 1;
    var sum = [];
    var sumRes = 0;

    //1
    while (from <= to) {

        var arr = (from + '').split('');
        console.log(arr);

        //2
        for (var i = 0; i < arr.length; i++) {
            res *= parseInt(arr[i]); //1 * 0 = 0
        }
        sum.push(res)
        res = 1;
        from++;
    }
    //3
    sum.map(function(item) {
        sumRes += item;
    })
    return sumRes;
}

console.log(multiSum(10, 13)); // 6
console.log(multiSum(10, 1000)); // 93150


/*
# 24. 각 자릿수의 합 구하기

정수 n이 주어지면, n의 각 자릿수의 합을 구해서 return 하는 digitSum 함수를 완성하라.
예를들어 n = 123이면 1 + 2 + 3 = 6을 return한다. 단, n은 100,000,000 이하의 정수로 한다.


```javascript
function digitSum(n) {

}

console.log(digitSum(123));  // 6
  // 24
  // false
```
*/

function digitSum(n) {
    if (n > 100000000) {
        return false;
    }

    var arr = (n + "").split('');
    var res = 0;
    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        res += +arr[i]
            //res += parseInt(arr[i])
    }
    return res;
}

console.log(digitSum(123));
console.log(digitSum(987));
console.log(digitSum(100000001));
console.log(digitSum(100000000));
console.log(digitSum(99999999));
/*
# 25. 중복없는 배열

길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 한다.
1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 isNotOverlapArray을 완성하라. 단, 배열의 요소는 정수이다.

예를들어 주어진 배열이 [4, 1, 3, 2]이라면 true, [4, 1, 3] 또는 [1, 3]이라면	false를 반환한다.

```javascript
function isNotOverlapArray(array) {

}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false
```
*/



// 1, ... lastNumber
function isNotOverlapArray(array) {
    var arraySort = array.sort(function(a, b) { return a - b; });

    //  console.log(arraySort);
    var max = Math.max.apply(null, array);
    //  console.log(max)

    var testArr = [];
    for (var i = 1; i <= max; i++) {
        testArr.push(i);
    }
    //  console.log(testArr);

    for (var k = 0; k < testArr.length; k++) {
        if (testArr[k] !== array[k]) {
            return false;
            break;
        }
    }
    return true;
}

console.log(isNotOverlapArray([10, 8, 5, 4, 3, 6, 7, 9, 2, 1]))