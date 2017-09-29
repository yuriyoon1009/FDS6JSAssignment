function triangle(lineCount) {
  var strStar = '';
  for (var star = 1; star < lineCount * 2; star++) {
    strStar += '*';
    if (star % 2 == 1) {
      var strSpace = '';
      for (var space = lineCount - Math.ceil(star / 2); space > 0; space--) {
        strSpace += ' ';
      }
      console.log(strSpace + strStar + strSpace);
    }
  }
}

triangle(13);


var reverse_tri = function(lineCount) {
  var star = 0;
  var strStar = '';

  for (; star < lineCount * 2; star++) {
    strStar += '*';
  }
  for (star; star > 0; star--) {
    if (star % 2 == 1) {
      var strSpace = '';
      for (var space = lineCount - Math.ceil(star / 2); space > 0; space--) {
        strSpace += ' ';
      }
      console.log(strSpace + strStar + strSpace);
    }
    strStar = strStar.substr(0, star - 1);
  }
}

reverse_tri(12)