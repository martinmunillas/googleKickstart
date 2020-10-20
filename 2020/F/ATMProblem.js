const solve = (caseX) => {
  let { X, A } = caseX;

  A = A.map((val, indx) => ({
    val,
    indx,
  }));

  const finalOrder = [];

  while (A.reduce((a, b) => a + b.val, 0)) {
    if (A[0].val > X) {
      A[0].val -= X;
      A.push(A[0]);
      A.shift();
    } else {
      finalOrder.push(A[0].indx + 1);
      A.shift();
    }
  }
  return finalOrder.join(' ');
};

//-----------------------------------------------

const runTests = (cases) => {
  for (let i = 0; i < cases.length; i++) {
    const result = solve(cases[i]);
    console.log(`Case #${i + 1}: ${result}`);
  }
};

const main = () => {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let tests;
  let cases = [];
  let currentArr = 0;
  const linesPerTest = 2;

  rl.on('line', (line) => {
    line = line
      .trim()
      .split(' ')
      .map((num) => parseInt(num));

    if (i === 0) {
      tests = parseInt(line[0]);
    } else {
      if (i % 2) {
        cases.push({ N: line[0], X: line[1], A: [] });
      } else {
        cases[currentArr].A = line;
        currentArr++;
      }
    }

    i++;
    if (i === 1 + tests * linesPerTest) {
      rl.close();
    }
  }).on('close', () => {
    runTests(cases);
  });
};

main();
