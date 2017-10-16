var findMinDistance = function(array) {
    //object 요소로 이루어진 배열을 쓰는 방법입니다.
    var res = [];

    for (var i = 0; i < array.length - 1; i++) {

        var obj = {
            "pair": "{" + array[i + 1] + "," + array[i] + "}",
            "min": array[i + 1] - array[i]
        }

        // (!0) == true
        if (!res.length) {
            res.push(obj);
            console.log(res);
        } else {
            if (res[0].min > obj.min) {
                res = [];
                res.push(obj);

                console.log(res);
            } else if (res[0].min === obj.min) {
                res.push(obj);

                console.log(res);
            }
        }

    }
    return res;
}


//mine
/*function findMinDistance(array) {
  //1
  var res = [];

  for (var i = 0; i < array.length; i++) {
 
      res.push({
          "pair": "(" + array[i] + "," + array[i + 1] + ")",
          "min": array[i + 1] - array[i]
      });
  }

  res.sort(function(a, b) { return a.min - b.min });
  return res[0].pair;
}
*/
// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]

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

console.log(sumDivisor(12));