//1번 문제
for (i = 0; i < 5; i++) {
  console.log(i * 2);
}

//2번 문제
var x = '';
for (i = 0; i < 10; i++) {
  if (i % 2 != 1) {
    x += String(i) + " ";
  }
}

console.log(x);

//3번 문제

for (i = 10; i > 0; i--) {
  if (i % 2 === 1)
    console.log(i)
}


//4번 문제
var i = 0;

do {
  console.log(i);
  i += 2;

} while (i < 8)

//5번 문제
var i = 10;

while (i > 0) {
  i -= 1;
  if (i % 2 === 1) {
    console.log(i);
  }

}

//6번문제
var val = 0;

for (var i = 0; i < 10; i++) {
  val += i;
}

//7번문제
var sum = 0;
for (var i = 1; i <= 20; i++) {
  if ((i % 2 != 0) && (i % 3 != 0)) {
    sum += i
      //console.log(i);
  }
}
console.log(sum);

//8번 문제
var sum = 0;
for (var i = 1; i <= 20; i++) {
  if ((i % 2 == 0) || (i % 3 == 0)) {
    sum += i
      //console.log(i);
  }
}
console.log(sum);


//9번 문제
for (var x = 1; x < 7; x++) {
  for (var y = 1; y < 7; y++) {
    if (x + y === 6) {
      console.log(x, y);
    }
  }
}

//10번 문제
var str = '';

for (var x = 0; x < 5; x++) {
  str += '*';
  console.log(str)
}

//11번문제
var str = '';

for (var x = 0; x < 3; x++) {
  str += '*';
  console.log(str)
}

//11번 문제 _2

var strCount = '';
var strSum = '';
var strTotal = '';
for (var x = 0; x < 5; x++) {
  strCount += '*';
  strSum += strCount + '\n';
  if (x == 2) {
    strTotal = strSum;
  }
}
strTotal += strSum;
console.log(strTotal);


//12번문제

var strStar = '';
//var strSpace = '';

for (var star = 1; star < 10; star++) {
  strStar += '*';
  if (star % 2 == 1) {
    var strSpace = '';
    for (var space = 5 - Math.ceil(star / 2); space > 0; space--) {
      strSpace += ' ';
    }
    console.log(strSpace + strStar + strSpace);
  }
}

4 1 4
3 3 3
2 5 2
1 7 1
0 9 0

//13번문제_1
var strStar = '*********';
for (var star = 9; star > 0; star--) {
  if (star % 2 == 1) {
    var strSpace = '';
    for (var space = 5 - Math.ceil(star / 2); space > 0; space--) {
      strSpace += 'x';
    }
    console.log(strSpace + strStar + strSpace);
  }
  strStar = strStar.substr(0, star - 1);
}

//13번문제_2
var star = 0;
var strStar = '';

for (; star < 10; star++) {
  strStar += '*';
}
for (star; star > 0; star--) {
  if (star % 2 == 1) {
    var strSpace = '';
    for (var space = 5 - Math.ceil(star / 2); space > 0; space--) {
      strSpace += ' ';
    }
    console.log(strSpace + strStar + strSpace);
  }
  strStar = strStar.substr(0, star - 1);
}