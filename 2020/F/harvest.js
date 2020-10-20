const solve = (test) => {
  let { periods, maxRobotDuration } = test;
  let totalDeploys = 0;
  let currentRobot = 0;

  periods = periods.sort((a, b) => a[0] - b[0]);
  let i = 0;
  while (i < periods.length) {
    if (i == 0) {
      currentRobot = periods[i][0] + maxRobotDuration;
      totalDeploys++;
    } else if (periods[i][1] > currentRobot && periods[i][0] < currentRobot) {
      currentRobot = currentRobot + maxRobotDuration;
      totalDeploys++;
    } else if (periods[i][0] >= currentRobot) {
      currentRobot = periods[i][0] + maxRobotDuration;
      totalDeploys++;
    }

    if (periods[i][1] <= currentRobot) {
      i++;
    }
  }
  return totalDeploys;
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
  let nextCase = 0;
  let lastCase = 0;

  rl.on('line', (line) => {
    line = line
      .trim()
      .split(' ')
      .map((num) => parseInt(num));

    if (i === 0) {
      tests = parseInt(line[0]);
      nextCase = i + 1;
    } else if (i == nextCase) {
      nextCase += line[0] + 1;
      cases.push({
        maxRobotDuration: line[1],
        totalPeriods: line[0],
        periods: [],
      });
      lastCase = cases.length - 1;
    } else {
      cases[lastCase].periods.push(line);
    }

    let x = cases[0]
      ? cases.length == tests
        ? cases.reduce((a, b) => a + b.totalPeriods, 0)
        : 10
      : 10;

    i++;
    if (i === 1 + tests + x) {
      rl.close();
    }
  }).on('close', () => {
    runTests(cases);
  });
};

main();
