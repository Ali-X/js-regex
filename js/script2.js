"use strict";

function findExpression(str) {
  let regex = /(^\s*-?\d+\.?\d*)\s*([+-\/*])\s*(-?\d+\.?\d*$)/g;
  let exp = regex.exec(str);
  console.log(`Input text: ${str}`);

  if (exp) {
    console.log(`First operand: ${exp[1]}`);
    console.log(`Operator: ${exp[2]}`);
    console.log(`Second operand: ${exp[3]}`);
  } else {
    console.log('There is no expression');
  }

  console.log('\n');
}

findExpression('1 + 2');
findExpression('1+2');
findExpression('1.2 3.4');
findExpression('1.2 + 3.4');
findExpression('-3 / -6');
findExpression('-2 - 2');
findExpression('.6   *   2');
findExpression('1.5 + 2');
findExpression('  5   +   2');
findExpression('5- -2');