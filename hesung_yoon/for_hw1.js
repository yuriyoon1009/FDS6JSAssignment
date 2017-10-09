// algo quiz

// #1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// 0 2 4 6 8 (vertical)

for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('1. Even numbers are' + ' ' + i);
    }
}

// #2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// 0 2 4 6 8 (horizontal)
var evenArray = [];
for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        var string = i.toString();
        evenArray.push(string);
    }
}

for (var i in evenArray) {
    var typeofTest = typeof(evenArray[i]);
}

console.log('2. Even numbers are' + ' ' + evenArray);
console.log('2. Data type is' + ' ' + typeofTest);

var char = '';

for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        char += i;
    }
}
console.log('2. the other answer' + char);
console.log(typeof(char));


// #3. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// 9 7 5 3 1 (vertical)
for (var i = 9; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log('3. Odd numbers' + ' ' + i);
    }
}
//continue : skip the step;
for (var i = 10; i >= 0; i--) {
    if (i % 2 === 0) { continue };
    console.log('3. the other answer' + ' ' + i);
}

// #4. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
// 0 2 4 6 8 (vertical)

//global variable even
var even = 0;

while (even < 9) {
    if (even % 2 === 0) {
        console.log('4. Even numbers are' + ' ' + even);
    }
    even++;
}

// #5. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// 9 7 5 3 1 (vertical)
var odd = 10;
while (odd >= 0) {
    if (odd % 2 !== 0) {
        console.log('5. Odd numbers are' + ' ' + odd);
    }
    odd--;
}

// #6. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
// 45

var sum = 0;
for (var i = 0; i < 10; i++) {
    sum += i;
}

console.log('6. Sum of the number from 0 to 10 is' + ' ' + sum);

var array = [];
var sumArray = 0;

for (var i = 0; i < 10; i++) {
    array.push(i);
    sumArray += array[i]
}

console.log('6. the other answer is' + sumArray);


// #7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// 73
var neitherEvenNorOdd = 0;
var bothEvenAndOdd = 0;

for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        neitherEvenNorOdd += i;
    }
}

console.log('7. Sum of the number' + ' ' + neitherEvenNorOdd);

// #8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// 137

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        bothEvenAndOdd += i;
    }
}

console.log('8. Sum of the number' + ' ' + bothEvenAndOdd);

/*#9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ]*/

//// first answer
var index_1 = 1;
var result = [];

while (index_1 < 7) {
    // 1,1 1,2 1,3 1,4 1,5 1,6
    // 2,1 2,2 2,3 2,4
    //var index_2 
    var index_2 = 1;
    while (index_2 < 7) {
        var sum = index_1 + index_2;
        if (sum === 6) {
            result = [index_1, index_2];
            //console.log(result);
        }
        index_2++;
    }
    index_1++;
}

///second answer
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        //if(i + j == 6)
        //console.log(i, j);
        if (i + j === 6) {
            console.log(i, j);
        }
    }
}

//third answer
var dice_a = [1, 2, 3, 4, 5, 6];
var dice_b = [1, 2, 3, 4, 5, 6];

for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 5; j++) {
        if (dice_a[i] + dice_b[j] === 6) {
            console.log('dice' + ' ' + dice_a[i], dice_b[j])
        }
    }
}


/*#10. 삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****

*/

//// first answer 
var star = ''
for (var i = 0; i <= 4; i++) {
    for (var k = 0; k <= i; k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

//// second answer
for (var i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}


/////////////////////////////////////
/*
#11. 트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****

*/
var star = '';
var starCnt = '';
var starTotal = '';

for (var i = 0; i < 5; i++) {
    star += '*';
    starCnt += star + '\n';
    /*
     starCnt = 
      *  star 0
      ** star 1
      *** star 2
      **** star 3
      ***** star 4
    */
    if (i == 2) {
        starTotal += starCnt;
        /*
         * 0
         ** 1
         *** 2
         */
    }
}
starTotal += starCnt
console.log('11 answer')
console.log(starTotal);


//console.log(starCount)
/*#12. 정삼각형 출력하기

    *
   ***
  *****
 *******
*********

*/

var sum = '';
var starTotal = ''

for (var i = 1; i <= 5; i++) {
    for (var k = 1; k <= 5 - i; k++) {
        sum += ' ';
    }

    for (var x = 1; x <= 2 * i - 1; x++) {
        sum += '*';
    }
    sum += '\n'
}
starTotal += sum

console.log(starTotal)

/*
#13. 역정삼각형 출력하기

*********
 *******
  *****
   ***
    *
*/

var sumReverse = '';
var starReverse = '';

for (var i = 5; i >= 1; i--) {
    for (var k = 1; k <= 5 - i; k++) {
        starReverse += ' ';
    }
    for (var x = 1; x <= 2 * i - 1; x++) {
        starReverse += '*';
    }
    starReverse += '\n';
}
sumReverse += starReverse

console.log(sumReverse);