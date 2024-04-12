/*** 4. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  if (withdraw % 5 != 0) {
    // 5배수가 아닐때 인출거부
    result = total;
  } else if (withdraw + 0.5 > total) {
    // 5의 배수이지만 인출할 금액 + 수수료가 잔액보다 클때
    result = total;
  } else {
    result = total - withdraw - 0.5;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
