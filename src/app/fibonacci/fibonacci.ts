export const fibonacciLoop = (num: number) => {
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

export const fibonacciRec = (num: number) => {
  if (num <= 1) {
    return 1;
  }

  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
};
