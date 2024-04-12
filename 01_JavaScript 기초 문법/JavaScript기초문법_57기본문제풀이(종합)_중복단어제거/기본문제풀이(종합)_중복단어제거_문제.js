/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  new_arr = arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        new_arr.splice(j, 1);
      }
    }
  }

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ['john', 'alice', 'alice'],
  // TC: 2
  ['Hello', 'hello', 'HELLO', 'hello'],
  // TC: 3
  ['kiwi', 'banana', 'mango', 'kiwi', 'banana'],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
