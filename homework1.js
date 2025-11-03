function pow(x, y) {
    let num = 1; 
    let square = y;
    for (let a = 0; a < square; a++) {
      num = num * x;
    }

    for (let a = 0; a > square; a--) {
        num = num * x;
      }
    if(square>0)
    return num;
    else
    if (square === 0)
    return num = 1;
    else
    return 1/num;
  }
console.log(pow(2,-2))
