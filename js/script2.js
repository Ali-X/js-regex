"use strict";

function findExpression(str) {
  let regex = /^(-|\d)+\s?[+-/]\s?(-|\d)+$/g;
  let exp = str.match(regex);
  console.log(`Input text: ${str}`);

  if (exp) {
    regex = /(-|\d)+|[+-/]|(-|\d)+/g;
    exp = str.match(regex);
    console.log(`First operand: ${exp[0]}`);
    console.log(`Operator: ${exp[1]}`);
    console.log(`Second operand: ${exp[2]}`);
  } else {
    console.log('There is no expression');
  }

  console.log('\n');
}

findExpression('1 + 2');
findExpression('1+2');
findExpression('1.2 3.4');
findExpression('-3 / -6');
findExpression('-2 - 2');