/*26. 요일 구하기

2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까?
두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.

요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다.
예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.

function getDayName(a, b){

}
*/

function getDayName(month, day) {
    var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var monthFrom1 = month - 1;

    //console.log(day);
    //return res;

    if (month >= 1 && month <= 12) {
        var day = new Date(2016, monthFrom1, day);
        var res = dayNames[day.getDay()];
        console.info(day);
        return res;
    } else if (month == undefined || day == undefined) {
        console.error('ddd');
    } else {
        console.error('please, input between January(1) to December(12)')
    }
}


/*
4. 문자열 내 p와 y의 개수

numPY함수는 대문자와 소문자가 섞여있는
문자열 s를 매개변수로 입력받는다.
대소문자를 구별하지 않으며
s에 'p'의 개수와 'y'의 갯수를 비교해 같으면
true, 다르면 false를 리턴하도록 함수를 완성하라.
'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.
예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.
*/

function numPY(s) {
    s = s ? s : ''; //s 인자를 주지 않았을 때에도 무리없이 돌아가도록
    var str = s.toUpperCase();
    //uppercase는 원본을 바꾸지 않기 때문에, 변수로 반환값을 담아둬야함
    var cntP = 0;
    var cntY = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'P') cntP++;
        if (str[i] === 'Y') cntY++;
    }
    return cntP === cntY;
}
//정규표현식
function numPY2(s) {
    s = s ? s : '';
    var regexpP = /p/ig;
    var regexpY = /y/ig;
    // return s.match(regexpP).length === s.match(regexpY).length;
    // 이경우 해당하는 값이 없으면 match는 null을 반환하여 에러 발생 -> 3항 연산자로 한번 확인
    return ((s.match(regexpP) ? s.match(regexpP).length : 0) === (s.match(regexpY) ? s.match(regexpY).length : 0));
}


function toWeirdCase1(s) {
    return s.split('').map((v, i) => {
        if (i % 2 === 0) {
            return v.toUpperCase();
        } else {
            return v.toLowerCase();
        }
    }).join('');

}



function toWeirdCase2(s) {
    // /^[\s]+/
    //var regular = /^[\s]+/;
    //return regular.match(s)
    var split = s.split(' ');
    var arr;
    var i = 0;
    var res = [];

    while (i < split.length) {
        // splitString = split[i];  
        arr = split.slice(i, i + 1)[0];

        var virtual = arr.split('');
        //arr = 'hello';
        for (var k = 0; k < virtual.length; k++) {
            if (k % 2 === 0) {
                var even = virtual[k].toUpperCase();
                virtual[k] = even;

            } else {
                var odd = virtual[k].toLowerCase();
                virtual[k] = odd;
            }
        }
        arr = '';
        i++;
        var join = virtual.join('');
        res.push(join);
    }
    return res.join(' ');
}

console.log(toWeirdCase1('how are you i fine thank you and you'));